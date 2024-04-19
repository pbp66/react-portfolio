const { API } = require("./api");
const axios = require("axios");

class GithubAPI extends API {
	constructor(username) {
		super("https://api.github.com");
		this.token = process.env.GITHUB_TOKEN;
		this.user = username;

		setAuth();
	}

	setAuth() {
		axios.defaults.headers.common = {
			Authorization: `Bearer ${this.token}`,
		};
	}

	async getRepos() {
		this.url.pathname = `users/${this.user}/repo`;
		return await this.fetch();
	}

	async getRepoActivity(repo) {
		this.url.pathname = `repos/${this.user}/${repo}/activity`;
		return await this.fetch();
	}
}

module.exports = { GithubAPI: GithubAPI };
