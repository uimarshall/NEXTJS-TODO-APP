class TaskItem extends React.Component {
	getStyle = () => {
		return {
			background: "#f4f4f4",
			padding: "10px",
			borderBottom: "1px dotted #ccc",
			textDecoration: this.props.task.completed ? "line-through" : "none"
		};
	};
	render() {
		const { id, title } = this.props.task;
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						onChange={this.props.markComplete.bind(this, id)}
					/>{" "}
					{title}
					<button
						style={btnStyle}
						onClick={() => {
							this.props.handleDelete(id);
						}}
					>
						DEL
					</button>
				</p>
			</div>
		);
	}
}

const btnStyle = {
	background: "#ff0000",
	color: "#fff",
	border: "1px solid #ccc",
	borderRadius: "20%",
	padding: "5px 10px",
	cursor: "pointer",
	float: "right"
};
export default TaskItem;
