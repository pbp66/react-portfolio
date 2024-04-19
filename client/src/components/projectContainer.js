import React from "react";

export default function ProjectContainer(props) {
	return (
		<>
			<div>Project Container</div>
			<h4>Title</h4>
			<h6>Subtitle</h6> {/* AKA short project description */}
			<div>
				<p>Summary and Features</p>
			</div>
			<div>Latest Activity</div>
			<button>View Project</button> {/* Link to project page */}
			<button>View Site</button> {/* Link to project site if applicable*/}
		</>
	);
}
