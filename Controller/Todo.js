const Todo = require("../Model/Todo");


//get method
const getTodos = (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
          res.send(err);
        }
        res.json(todos);
      });
  };

  //post method
  const createTodo = (req, res) => {
    const todo = new Todo({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
      createdAt: Date.now()
    });
  
    todo.save((err, todo) => {
      if (err) {
        res.send(err);
      }
      res.json(todo);
    });
  };

//put method
  const updateTodo = (req, res) => {
    Todo.findOneAndUpdate(
      { _id: req.params.todoID },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          completed: req.body.completed,
          modifiedAt: Date.now()
        },
      },
      { new: true },
      (err, Todo) => {
        if (err) {
          res.send(err);
        } else res.json(Todo);
      }
    );
  };

//delete Method
  const deleteTodo = (req, res) => {
    Todo.deleteOne({ _id: req.params.todoID })
      .then(() => res.json({ message: "Todo Deleted" }))
      .catch((err) => res.send(err));
  };
  
  module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
  };