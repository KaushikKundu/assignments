/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(todolist){
    todolist = [];
  }
  add(todo) {
    todolist.push(todo);
  }
  remove(index){
    delete todolist[index];
    for(let i=index; i<todolist.length(); i++){
      todolist[i] = todolist[i+1];
    }
  }
  update(index,item){
    todolist[index] = item;
  }
  getAll(){
    return todolist;
  }
  get(index){
    return todolist[index];
  }
  clear(){
    todolist.length() = 0; // todolsit = []
  }

}

module.exports = Todo;
