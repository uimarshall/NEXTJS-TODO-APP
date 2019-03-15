import Layout from "../components/Layout";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

class Index extends React.Component {
	state = {
		tasks: [
			{
				id: 1,
				title: "Push updates to github",
				completed: false
			},
			{
				id: 2,
				title: "Plan for sunday metting",
				completed: false
			},
			{
				id: 3,
				title: "Go for recreation with family",
				completed: false
			}
		]
	};
	markComplete = id => {
		this.setState({
			tasks: this.state.tasks.map(task => {
				if (task.id === id) {
					task.completed = !task.completed;
				}
				return task;
			})
		});
	};
	handleDelete = id => {
		this.setState({
			tasks: [...this.state.tasks.filter(task => task.id !== id)]
		});
	};

	addTask = title => {
		const newTask = {
			id: Math.floor(Math.random()),
			title: title,
			completed: false
		};
		this.setState({ tasks: [...this.state.tasks, newTask] });
	};
	render() {
		// The Component will render and return this jsx to the DOM
		return (
			<Layout>
				<div className="App">
					<div className="container">
						<AddTask addTask={this.addTask} />
						<Tasks
							tasks={this.state.tasks}
							markComplete={this.markComplete}
							handleDelete={this.handleDelete}
						/>
					</div>
				</div>
			</Layout>
		);
	}
}

export default Index;
