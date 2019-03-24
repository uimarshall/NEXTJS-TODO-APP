import TaskItem from "./TaskItem";

// In UI based Comp, we pass the props as an obj to the comp
const Tasks = ({ tasks, markComplete, handleDelete,props }) => {
	return tasks.length ? (
		tasks.map(task => {
			// pass each 'task' mapped as props to TaskItem
			return (
				<TaskItem
					key={task.id}
					task={task}
					markComplete={markComplete}
					handleDelete={handleDelete}
				/>
			);
		})
	) : (
		<p>No tasks yet!</p>
	);
};

export default Tasks;
