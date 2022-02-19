const { Router } = require("express");
const router = Router();
const {
    getAlltodo,
} = require("../controllers/todo");
const { validator } = require("../middleware/expressValidator");
const { body, param } = require("express-validator");

router.route("/").get(getAlltodo);

module.exports = router;