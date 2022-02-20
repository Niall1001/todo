const {
    getAlltodoService,
    postToDoService,
    deleteToDoService,
    updateToDoService,
} = require("../services/todo");
const okStatus = 200;
const noContentStatus = 204;

const getAlltodo = async (req, res) => {
    const todos = await getAlltodoService();
    if (!todos || todos.length === 0) return res.sendStatus(noContentStatus);
    res.status(okStatus).json({
        todos,
    });
};

const postToDo = async (req, res) => {
    const newToDo = await postToDoService(req);
    if(!newToDo || newToDo.length === 0) return res.sendStatus(noContentStatus);
    res.status(okStatus).json(newToDo);
};

const deleteToDo = async(req, res) => {
    await deleteToDoService(req.params.id);
    res.status(okStatus).json({
        message: `Successfully deleted boat with id: ${req.params.id}`,
    });
};

const updateToDo = async(req, res) => {
    const updatedToDo = await updateToDoService(req);
    if(!updatedToDo || updatedToDo.length === 0) return res.sendStatus(noContentStatus);
    res.status(okStatus).json(updatedToDo);
}
module.exports = {
    getAlltodo,
    postToDo,
    deleteToDo,
    updateToDo,
}