import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

class DetailsForm extends React.Component {
	constructor(props) {
		super(props);
		this.layout = {
			labelCol: { span: 8 },
			wrapperCol: { span: 16 },
		};
		this.tailLayout = {
			wrapperCol: { offset: 8, span: 16 },
		};
		this.onFinish = this.onFinish.bind(this);
	}

	onFinish(values) {
		const project = {
			name: values.name,
			repository: values.repository,
			github: values.github,
			tags: values.tags.split(',').map((tag) => tag.trim()),
			date: values.date,
		};
		const newProjects = this.props;
		newProjects.push(project);
		this.props.setProjects({ projects: newProjects });
		console.log('Success:', this.state.projects);
	}

	onFinishFailed(errorInfo) {
		console.log('Failed:', errorInfo);
	}

	render() {
		return (
			<Form
				{...this.layout}
				name="basic"
				initialValues={{ remember: true }}
				onFinish={this.onFinish}
				onFinishFailed={this.onFinishFailed}
			>
				<Form.Item
					label="Project name"
					name="name"
					rules={[
						{
							required: true,
							message: 'Please enter the name of your project!',
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Repository URL"
					name="repository"
					rules={[
						{ required: true, message: 'Please enter the repository URL!' },
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Github Username"
					name="github"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="DatePicker"
					name="date"
					rules={[
						{ required: true, message: 'Please input date of creation!' },
					]}
				>
					<DatePicker />
				</Form.Item>
				<FormItem label="Enter your Technology Stack" name="tags">
					<Input.TextArea />
				</FormItem>
				<Form.Item {...this.tailLayout}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

export default DetailsForm;
