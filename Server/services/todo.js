const prisma = require("../utils/prisma");

const getAlltodoService = async () => {
    return await prisma.todo.findMany();
};

exports.getAlltodoService = getAlltodoService;