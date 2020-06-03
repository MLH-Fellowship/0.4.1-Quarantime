import React from 'react';
import { Tag, Card } from 'antd';
import moment from 'moment';
import './Project.css';

class Project extends React.Component {
	constructor(props) {
		super(props);
		this.generateTags = this.generateTags.bind(this);
		this.generateProjects = this.generateProjects.bind(this);
	}

	generateProjects() {
		console.log(this.props.projects);
		return this.props.projects.map((project) => {
			return (
				<Card
					type="inner"
					title={project.name}
					extra={<a href={project.repository}>More</a>}
				>
					{this.generateTags(project.tags)}
					<br />
					<br />
					<h5>
						Published on:{' '}
						<strong> {moment(project.date).format('MM/DD/YYYY')} </strong>
					</h5>
				</Card>
			);
		});
	}

	generateTags(tags) {
		return tags.map((tag) => <Tag>{tag}</Tag>);
	}

	render() {
		return <Card title="Projects">{this.generateProjects()}</Card>;
	}
}

export default Project;
