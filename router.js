const router = require("express").Router();
const { getTodos, createTodo, updateTodo, deleteTodo } = require("./Controller/Todo");

router.get("/todo", getTodos);
router.post("/todo", createTodo);
router.put("/todo/:todoID", updateTodo);
router.delete("/todo/:todoID", deleteTodo);

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });
  
module.exports = router;