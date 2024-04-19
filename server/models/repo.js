const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const repoSchema = new Schema(
	{
		id: {
			type: Number,
			required: true,
			unique: true,
		},
		title: {
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
		private: {
			type: Boolean,
			default: false,
		},
		url: {
			type: String,
			required: true,
			match: [/[regex]/, "Must enter a valid URL"],
		},
		homepage: {
			type: String,
			required: true,
			match: [/[regex]/, "Must enter a valid URL"],
		},
		topics: {}, // TODO: create array type?
		activity: {}, // TODO: is this an array type? A separate model with its own information?
		languages: {}, // TODO: create array type?
		forkStatus: { type: Boolean, default: false },
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

const Repo = mongoose.model("Repo", repoSchema);
exports.default = Repo;
