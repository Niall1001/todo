import React, { useEffect } from 'react';
import instance from '../../../utils/axios';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';
const TodoCard = ({ id, description, completed }) => {
	const [ descriptionInput, setDescriptionInput ] = useState('');
	const [ editMode, setEditMode ] = useState(false);
	const [ completedStatus, setCompletedStatus] = useState(completed);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const errors = [];

		if (descriptionInput === '') {
			errors.push('The form is not valid, please provide a to description correctly.');
		}
		console.log(descriptionInput);
		instance
			.put(`/todo/${id}`, {
				description: descriptionInput,
				completed: false
			})
			.then(
				(response) => {
					alert(`Editted description for ToDo with ID: ${id}`);
				},
				(error) => {
					alert(error.message);
				}
			);
	};

	useEffect(() => {
		setDescriptionInput(description);
	}, [description]);

	const handleEditCLick = () => {
		setEditMode(true);
	};

	const handleCompletedClick = async () => {
		setCompletedStatus(true);

		const errors = [];

		if (completed === '') {
			errors.push('Completed must be either true or false');
		}
		console.log(completedStatus);
		
		instance
			.put(`/todo/${id}`, {
				description: description,
				completed: true
			})
			.then(
				(response) => {
					alert(`Completed status set to true with ID: ${id}`);
				},
				(error) => {
					alert(error.message);
				}
			);
	};

	const handleUnCompletedClick = async () => {
		setCompletedStatus(false);

		const errors = [];

		if (completed === '') {
			errors.push('Completed must be either true or false');
		}
		console.log(completedStatus);
		instance
			.put(`/todo/${id}`, {
				description: description,
				completed: false
			})
			.then(
				(response) => {
					alert(`Completed status set to false with ID: ${id}`);
				},
				(error) => {
					alert(error.message);
				}
			);
	};

	const handleCloseCLick = () => {
		setEditMode(false);
	};

	const handleChangeInput = (event) => {
		setDescriptionInput(event.target.value);
	};

	return (
		<div
			style={{
				marginTop: '5px',
				marginRight: '5px',
				marginLeft: '5px',
				marginBottom: '5px'
			}}
		>
			{editMode ? (
				<div class='post-it'>
					<form onSubmit={handleSubmit}>
						<TextField
							id="filled-basic"
							variant="standard"
							onChange={handleChangeInput}
							value={descriptionInput}
							style={{ width: '100%' }}
						/>
						<Button className="button-52" type="submit" variant="contained" style={{ marginTop: '15px' }}>
							Save Description Edit
						</Button>
						<Button
							className="button-52"
							onClick={handleCloseCLick}
							variant="contained"
							style={{ marginTop: '15px', marginLeft: '15px' }}
						>
							Close edit todo card
						</Button>
					</form>
				</div>
			) : (
				<div class='post-it'>
					<h1>id={id}</h1>
					<li>description={description}</li>
					<li>completed={completedStatus}</li>
				</div>
			)}
			{completedStatus ? (
				<div className="todo-card-container">
					<button className="button-52" onClick={handleEditCLick}>Edit To-Do: {id}</button>
					<button className="button-52" onClick={handleCompletedClick}>Complete me</button>
				</div>
			) : (
				<div className="todo-card-container">
					<button className="button-52" onClick={handleEditCLick}>Edit To-Do: {id}</button>
					<button className="button-52" onClick={handleUnCompletedClick}>Un-complete me</button>
				</div>
			)}
		</div>
	);
};

export default TodoCard;
