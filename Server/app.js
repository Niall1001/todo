const express = require("express");
const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const app = express();

const {
    todoRouter
} = require("./routers");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/todo', todoRouter);


app.use((err, req, res, next) => {
    res.status(500).send(err);
});
module.exports = app;