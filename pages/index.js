import Layout from "../components/Layout";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import fetch from 'isomorphic-unfetch';

class Index extends React.Component {
	
	static async getInitialProps() {
    const res = await fetch('http://localhost:3000/api/items')
    const tasks = await res.json()
    return { tasks }
  }
  componentWillMount() {
    this.setState({
      tasks: this.props.tasks
    })
  }
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
