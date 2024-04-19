const { GithubAPI } = require("../lib/GithubApi.js");

function updateRepoData() {
	const GithubAPI = new GithubAPI(process.env.GITHUB_USER);
	// TODO: Determine how to use the below methods to update the database. If needed, add additional methods...
	//GithubAPI.getRepos();
	//GithubAPI.getRepoActivity();
	//GithubAPI.getTags();
}

module.exports = { updateRepoData: updateRepoData };
