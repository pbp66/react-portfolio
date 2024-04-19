class GithubRepo {
	constructor(
		id,
		name,
		description,
		private,
		url,
		homepage,
		topics,
		activity,
		languages
	) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.private = private;
		this.url = new URL(url);
		this.homepage = homepage;
		this.topics = topics;
		this.latestActivity = activity; // TODO: ensure the most recent activity is passed...
		this.languages = languages; // TODO: test if API returns multiple languages
	}

	setSummary(readme) {
		// TODO: parse the readme to create summary
		return this.summary;
	}
}

module.exports = { GithubRepo: GithubRepo };
