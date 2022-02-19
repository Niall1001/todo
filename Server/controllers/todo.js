const {
    getAlltodoService
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

module.exports = {
    getAlltodo
}