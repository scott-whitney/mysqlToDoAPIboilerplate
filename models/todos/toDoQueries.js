

// get todos
const findAllTodos = 'SELECT * FROM to_do_list;';
const findAllCompleted = 'SELECT * FROM to_do_list WHERE completed = true;';
const findAllIncompleted = 'SELECT * FROM to_do_list WHERE completed = false;';
const findTodoById = 'SELECT * FROM to_do_list WHERE id = ?;';
// add todos
const addTodo = 'INSERT INTO to_do_list SET ?;';

// Deletes todos
const deleteToDoById = 'DELETE FROM to_do_list WHERE id = ?;';
// updating todos
const updateToDoTextById = 'UPDATE todos SET text = ? WHERE id = ?;';

module.exports = {
  findAllTodos,
  findAllCompleted,
  findAllIncompleted,
  findTodoById,
  addTodo,
  deleteToDoById,
  updateToDoTextById
};