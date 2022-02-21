const prisma = require('../utils/prisma');

const getAlltodoService = async () => {
	return await prisma.todo.findMany();
};

const postToDoService = async (req) => {
	const { description, completed } = req.body;
	const newToDo = await prisma.todo.create({
		data: {
			description: description,
			completed: completed
		}
	});
	return newToDo;
};

const deleteToDoService = async (id) => {
	try {
		await prisma.todo.delete({
			where: {
				id: parseInt(id)
			}
		});
	} catch (e) {
		console.log(e);
	}
};

const updateToDoService = async (req) => {
	const { description, completed } = req.body;
	const updatedId = parseInt(req.params.id);
	const updatedToDo = await prisma.todo.update({
		where: {
			id: updatedId
		},
		data: {
			description: description,
			completed: Boolean(completed)
		}
	});
	return updatedToDo;
};

exports.getAlltodoService = getAlltodoService;
exports.postToDoService = postToDoService;
exports.deleteToDoService = deleteToDoService;
exports.updateToDoService = updateToDoService;
