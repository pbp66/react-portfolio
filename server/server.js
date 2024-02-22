const express = require("express");
const path = require("path");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const url = require("url");

const db = require("./config/connection.js");
const typeDefs = require("./graphql/graphql.js");
const { resolvers } = require("./controllers/index.js");
const { authMiddleware } = require("./utils/auth.js");
const routes = require("./routes/routes.js");

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

const options = { root: process.env.ROOT_DIR };
if (process.env.NODE_ENV === "production") {
	console.log(path.resolve(options.root, "../client/build"));
	app.use("/", express.static(path.resolve(options.root, "../client/build")));
}

app.get(process.env.URI_PATH || "/", (req, res) => {
	res.sendFile("../client/build/index.html", options);
});

const startApolloServer = () => {
	db.once("open", async () => {
		await server.start();
		app.use(
			"/graphql",
			expressMiddleware(server, {
				context: authMiddleware, // Runs all graphql req's through authMiddleware
			})
		);

		app.listen(PORT, () => {
			console.log(
				`🌍 API server running Now Listening on http://localhost:${PORT}`
			);
			console.log(`Use GraphQL at http://localhost:${PORT}${"/graphql"}`);
		});
	});
};

startApolloServer();
