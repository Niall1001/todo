import { useEffect, useState } from 'react';
import instance from '../../utils/axios';
import TodoCard from './components/TodoCard';
import { Button, TextField } from '@mui/material';
import './index.css';

const Todo = () => {
	const [ input, setInput ] = useState('');
	const [ toDos, setToDos ] = useState([]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const errors = [];

		if (input === '') {
			errors.push('The form is not valid, please provide a to description correctly.');
		}

		if (errors.length > 0) {
			alert(errors);
			return;
		}
		console.log(input);
		instance
			.post(`/todo`, {
				description: input,
				completed: false
			})
			.then(
				(response) => {
					alert('New to do added');
				},
				(error) => {
					alert(error.message);
				}
			);
		getData();
	};

	const handleChangeInput = (event) => {
		setInput(event.target.value);
	};

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const todoRes = (await instance.get(`/todo`)).data.todos;
			console.log(todoRes);
			setToDos(todoRes);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="todos-container">
			{toDos.length > 0 ? (
				<div>
				<div class="animated-title" style={{marginTop:-100}}>
					<div class="text-top">
						<div>
						<span>To Do</span>
						<span>Application</span>
						</div>
					</div>
					<div class="text-bottom">
						<div>Life made easier</div>
					</div>
					</div>
					<form onSubmit={handleSubmit}>
						<div style={{ width: '100%' }}>
							<div class='post-it' style={{marginTop:500}}>
							<TextField
								id="filled-basic"
								variant="standard"
								onChange={handleChangeInput}
								value={input}
								style={{ width: '100%' }}
							/>
							</div>
						</div>
						<div className="todo-card-container">
						<Button class="button-52" type="submit">
							Save To do
						</Button>
						</div>
					</form>

					{toDos.map((todo) => {
						return <TodoCard id={todo.id} description={todo.description} completed={todo.completed} />;
					})}
				</div>
			) : (
				<div>Loading</div>
			)}
		</div>
	);
};

export default Todo;
