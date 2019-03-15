class AddTask extends React.Component {
	state = {
		title: ""
	};
	hanldeSubmit = e => {
		e.preventDefault();
		this.props.addTask(this.state.title);
		this.setState({ title: "" });
	};
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<div>
				<form onSubmit={this.hanldeSubmit} className="form-group">
					<input
						type="text"
						name="title"
						placeholder="Add Task Here..."
						onChange={this.handleChange}
						value={this.state.title}
					/>
					<input type="submit" value="Submit" className="btn btn-primary" />
				</form>
				<style>{`
                    form{
                        display: flex;
                    }
                    input[type=text]{
                        flex: 10; 
                        padding: 15px;
                    }
                    input[type=submit]{
                        flex: 1;
                    }
                    .btn {
                        display: inline-block;
                        border: none;
                        background: #555;
                        color: #fff;
                        padding: 7px 20px;
                        cursor: pointer;
                    }
                    input::placeholder { color: #555; font-size: 1.5em; font-style: italic; }
                    
                    `}</style>
			</div>
		);
	}
}

export default AddTask;
