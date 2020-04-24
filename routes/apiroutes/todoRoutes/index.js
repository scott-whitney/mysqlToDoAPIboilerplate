const router = require('express').Router();
const todosController = require('../../../controllers/todoscontroller')

// /api/todos
router.route('/')
  .get(todosController.getAllTodos)
  .post(todosController.addTodo)


router.route('/:id')
  .get(todosController.getTodoById)
  .delete(todosController.deleteTodoById)
module.exports = router;