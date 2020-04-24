const express = require("express");
// the filename index is a special name in Node
// if we require a folder in Node and we dont specify a file name
// node will automitcally look for an index.js inside of that folder.
const routes = require("./routes");





// connection.connect(err => {
//   if (err) throw err;
//   console.log('Connected')
// });

const PORT = 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// any route that goes to slach
// have the router object inside of routes
// handle the routing for us

app.use(routes);

// app.use('/api', routes)

// app.get('/api/todos', async (req, res) => {
//   const query = 'SELECT * FROM to_do_list;';
//   try {
//     // setting the first value in the aray response equal to todos
//     const [todos] = await connection.query(query);
//     console.log(todos);
//     res.status(200).json(todos)
   
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });
// // app.get('/api/todos/:id', (req, res) => {
// //   const query = 'SELECT * FROM to_do_list WHERE ?;';
// //   const { id } = req.params;
// //   connection.query(query, { id }, (err, todos) => {
// //     if (err) throw err;
// //     console.log(todos)
// //     res.json(todos[0]);
// //   });
// // });

// // app.get('/api/todos/:id', async (req, res) => {
// //   const query = 'SELECT * FROM to_do_list WHERE ?;';
// //   const { id } = req.params;

// //   try{
// //     const [todos] = await connection.query(query, { id });
// //     console.log(todos);
// //     res.status(200).json(todos);
// //   } catch (e) {
// //     res.status(403).json({ e });
// //   }

// // });

// app.get('/api/todos/:id', async (req, res) => {
//   const query = 'SELECT * FROM to_do_list WHERE ?;';
//   const { id } = req.params;
//   try {
//     const [todos] = await connection.query(query, { id });
//     console.log(todos);
//     res.status(200).json(todos);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// app.post('/api/todos', async (req, res) => {
//   const { text_list } = req.body;
//   if (!text_list) {
//     return res.json({ error: 'You must provide text for to_do_list'});
//   }
//   const query = 'INSERT INTO to_do_list SET ?;';
//   try {
//     const [response] = await connection.query(query, { text_list });
//     console.log(response);
//     const query2 = 'SELECT * FROM to_do_list WHERE ?;';
//     const [todos] = await connection.query(query2, {id: response.insertId });
//     res.json(todos[0]);
  
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });



// // patch is for 1 piece of a data's data
// app.patch('/api/todos/:id', async (req, res) => {
//   const query = 'UPDATE to_do_list SET ? WHERE ?;';
//   const query2 = 'SELECT * FROM to_do_list WHERE ?;';
//   const { id } = req.params;
//   const { text_list } = req.body;
//   // const id = req.params.id;
//   // const text_list =req.body.text_list;
//   try {
//     await connection.query(query, [{ text_list }, { id }]);
//     const [todos] = await connection.query(query2, { id });
//     console.log(todos);
//     res.status(200).json(todos)
//   } catch (e) {
//     res.status(403).json({ e });
//   }
//   // you will pull out te id from req.params
//   // you will pull out the text from req.body

//   // query your database to update that specific todo by it's id
//   // you will uodate the text of that todo into what the user is updating it to
//   // after you update the data, send bac the newely updated data as a response
// });
// put is for multiple properities of some data
// app.put('/api/todos/:id', async (req, res) => {
//   const { id } = req.params;
//   const { text } = req.body;
//   const getTodoById = 'SELECT * FROM todos WHERE ?;';
//   try {
//     const [todos] = await connection.query(getTodoById, { id });
//     const foundTodo = todos[0];
//     const updateTodoById = 'UPDATE todos SET ?, ? WHERE ?;';
//     await connection.query(updateTodoById, [{ text }, { completed: !foundTodo.completed}, { id }]);
//     const [todosUpdated] = await connection.query(getTodoById, { id });
//     res.json(todosUpdated[0]);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });



app.listen(PORT);
