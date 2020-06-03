import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import './App.css';
import DetailsForm from './components/DetailsForm';
import Project from './components/Project';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [
				{
					name: 'Saphal Patro',
					repository: 'http://github.com',
					github: 'saphal1998',
					tags: ['react', 'javascript'],
					date: new Date(),
				},
			],
		};
		this.setProjects = this.setProjects.bind(this);
	}

	setProjects(newProjects) {
		this.setState(newProjects);
		console.log(this.state);
	}

	render() {
		const { Content } = Layout;
		return (
			<Layout className="layout">
				<Content style={{ padding: '0 50px' }}>
					<div className="site-layout-content">
						<DetailsForm
							projects={this.state.projects}
							setProjects={this.setProjects}
						/>
						<Project projects={this.state.projects} />
					</div>
				</Content>
			</Layout>
		);
	}
}

export default App;
