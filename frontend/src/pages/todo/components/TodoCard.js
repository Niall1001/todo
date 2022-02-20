import React, { useEffect } from 'react';
import instance from '../../../utils/axios';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';

const TodoCard = ({ id, description, completed }) => {
	const [ descriptionInput, setDescriptionInput ] = useState('');
	const [ editMode, setEditMode ] = useState(false);

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
	}, []);

	const handleEditCLick = () => {
		setEditMode(true);
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
				<div>
					<form onSubmit={handleSubmit}>
						<TextField
							id="filled-basic"
							variant="standard"
							onChange={handleChangeInput}
							value={descriptionInput}
							style={{ width: '100%' }}
						/>
						<Button type="submit" variant="contained" style={{ marginTop: '15px' }}>
							Save Description Edit
						</Button>
						<Button
							onClick={handleCloseCLick}
							variant="contained"
							style={{ marginTop: '15px', marginLeft: '15px' }}
						>
							Close edit todo card
						</Button>
					</form>
				</div>
			) : (
				<div>
					<div>id={id}</div>
					<div>description={description}</div>
					<div>completed={completed}</div>
				</div>
			)}
			<button onClick={handleEditCLick}>Edit me</button>
		</div>
	);
};

export default TodoCard;
