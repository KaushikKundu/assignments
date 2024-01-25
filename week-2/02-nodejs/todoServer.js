/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
app.use(bodyParser.json());
// used for parsing json data in req body to js object
let todos = loadTodos(); // Load todos at the beginning

function loadTodos() {
  try {
    const data = fs.readFileSync("./todos.json", "utf8");
    return JSON.parse(data) || [];
  } catch (error) {
    console.error("Error loading todos:", error.message);
    return [];
  }
}

const saveTodos = () => {
  fs.writeFileSync("./todos.json", JSON.stringify(todos,null,2), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("saved");
    }
  });
};

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  todos = loadTodos();
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    res.status(200).json({ todo });
  } else {
    res.status(404).json({ message: "404 Not found" });
  }
});
app.post("/todos", (req, res) => {
  const data = req.body;
  const id = todos.length + 1;
  data.id = id;
  loadTodos();
  todos.push(data);
  saveTodos();
  res.status(201).json({ id });
});

app.put("/todos/:id", (req, res) => {
  loadTodos();
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  const { title, description, completed } = req.body;
  if (todo) {
    todo.title = title;
    todo.description = description;
    todo.completed = completed;
    saveTodos();
    res.status(200).json(todo);
  } else {
    res.status(404).json({ message: "404 Not found" });
  }
});
app.delete("/todos/:id", (req, res) => {
  loadTodos();
  const id = parseInt(req.params.id);
  const todoIndex = todos.find((todo) => todo.id === id);
  if (todoIndex !== -1) {
    todos.splice(todos.indexOf(todo), 1);
    todos.forEach((todo,index) => {
      todo.id = index + 1;
    })
    res.status(200).json(todo);
  } else {
    res.status(404).json({ message: "404 Not found" });
  }
});
app.listen(port, () => {
  console.log(`Todo server is running on port ${port}`);
});
module.exports = app;
