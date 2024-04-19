/* Github Object Planning:
repo data:
- id (DB purposes only)
- title (project name)
- description (subtitle)
- summary (parsed from README. DO NOT include it in the DB)
- private status (Needs to be false to display information)
- Repository URL
- homepage URL (provide homepage URL for applicable projects)
- topics (Display topics as tags)
- latest activity (parsed from repo activity api result)
- languages? (Depends if github api returns multiple languages)
- forkStatus (detect for forked repos. display forked repo instead of parent)
*/

class GithubRepo {
	constructor(
		id,
		title,
		description,
		private,
		url,
		homepage,
		topics,
		activity,
		languages,
		forkStatus
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.summary = getSummary();
		this.private = private;
		this.url = new URL(url);
		this.homepage = homepage;
		this.topics = topics;
		this.latestActivity = activity; // TODO: ensure the most recent activity is passed...
		this.languages = languages; // TODO: test if API returns multiple languages
		this.forkStatus = forkStatus;
	}

	setSummary(readme) {
		// TODO: parse the readme to create summary
	}

	getSummary() {
		// TODO: Add check to see if this.summary is set. If not, call setSummary before returning this.summary
		return summary;
	}
}

module.exports = { GithubRepo: GithubRepo };
