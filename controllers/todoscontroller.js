const connection = require('../config/connection')
const todoQueries = require('../models/todos/toDoQueries')
module.exports = {
  getAllTodos: async (req, res) => {
    try {
      // setting the first value in the aray response equal to todos
      const [todos] = await connection.query(todoQueries.findAllTodos);
      console.log(todos);
      res.status(200).json(todos)
     
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  addTodo: async (req, res) => {
    const { text_list } = req.body;
    if (!text_list) {
      return res.json({ error: 'You must provide text for to_do_list'});
    }

    try {
      const [response] = await connection.query(todoQueries.addTodo, { text_list });
      console.log(response);

      const [todos] = await connection.query(todoQueries.findTodoById, response.insertId);
      res.json(todos[0]);
    
    } catch (e) {
      res.status(403).json({ e });
    }

  },
  getTodoById: async (req, res) => {
    const { id } = req.params;
    try {
      const [todos] = await connection.query(todoQueries.findTodoById, id );
      console.log(todos);
      res.status(200).json(todos);
    } catch (e) {
      res.status(403).json({ e });
    }

  },
  deleteTodoById: async(req, res) => {
    const { id } = req.params;
    try {
      await connection.query(todoQueries.deleteToDoById, id );
      const [todos] = await connection.query(todoQueries.findAllTodos);
      console.log(todos);
      res.status(200).json(todos)
  
    } catch (e) {
      res.status(403).json({ e });
    }
  },
};