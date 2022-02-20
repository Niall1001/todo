const { Router } = require("express");
const router = Router();
const {
    getAlltodo,
    postToDo,
    deleteToDo,
    updateToDo,
} = require("../controllers/todo");
const { validator } = require("../middleware/expressValidator");
const { body, param } = require("express-validator");

router.route("/").get(getAlltodo);
router.route("/").post(
    [
        body("description").notEmpty().withMessage("Description field cannot be null"),
    ],
    (req, res, next) => {
        validator(req,res,next);
    },
    postToDo
);

router.route("/:id").delete(
    [param("id").isNumeric().withMessage("The id must be a numeric value.")],
    (req, res, next) => {
        validator(req, res, next);
    },
    deleteToDo
);

router.route("/:id").put(
    [
        param("id").isNumeric().withMessage("The id must be a numeric value."),
        body("description").notEmpty().withMessage("The descriptions requires a text field input"),
        body("completed").notEmpty().withMessage("The completed requires a true/false input"),
    ],
    (req, res, next) => {
        validator(req,res,next);
    },
    updateToDo
);

module.exports = router;