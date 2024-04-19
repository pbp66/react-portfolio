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
const { GithubAPI } = require("./lib/GithubApi.js");

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const serverRoot = process.env.SERVER_ROOT;
const appRoot = process.env.APP_ROOT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

if (process.env.NODE_ENV === "production") {
	app.use(
		express.static(path.join(serverRoot, appRoot, "client/build/static/"))
	);
	app.use(express.static(path.join(serverRoot, appRoot, "client/build/")));
}

app.get(process.env.URI_PATH || "/", (req, res) => {
	//res.type("js");
	res.sendFile(path.join(appRoot, "client/build/index.html"), {
		root: "/home/pbp66/",
	});
});

// TODO: relocate function to separate file and location
function updateRepos() {
	const GithubAPI = new GithubAPI(process.env.GITHUB_USER);
	// TODO: Determine how to use the below methods to update the database
	//GithubAPI.getRepos();
	//GithubAPI.getRepoActivity();
	//GithubAPI.getTags();
}

//setInterval(updateRepos, 86400); // Run every day

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
