angular.module("todoApp", []) // App basic function with name
.controller("TodoListController", function($scope) { // control the app
  var todoList = this; // variable of todolist
  todoList.todoItems = [ // Todolist items
    { name: "Go to school", done: false }, // example of todoItems
    { name: "Eat lunch", done: false }, // example of todoItems
    { name: "Do laundry", done: false }, // example of todoItems
    { name: "Buy materials for project", done: false } // example of todoItems
  ] // End of Todolist items

  todoList.addTodo = function() { // Add items in todolist function
    todoList.todoItems.push( // push items in todolist
      { name: todoList.todoText } // name of items which you wants to add
    ) // End push items in todolist
    todoList.todoText = ""; // todolist variable
  }; // End add items on todolist function

  todoList.remove = function() { // remove items from todolist function
    console.log('remove function fired'); // console log
    var oldTodos = todoList.todoItems; // variable of oldtodos
    todoList.todoItems = []; // todolist remove items remove
    angular.forEach(oldTodos, function(todo) { // angular oldtodo function
      if(!todo.done) todoList.todoItems.push(todo); // if todolist not done...
    }) // End angular oldtodo function
    todoList.todoItems // todolist items
  }; // End remove items from todolist function

  todoList.remaining = function() { // todolist remaining function
    var notCompletedCount = 0; // variable not complet count starts from 0
    angular.forEach(todoList.todoItems, function(todo) { // angular remaining counter function
      notCompletedCount += todo.done ? 0 : 1; // count remaining
    }) // End angular remaining counter function

    return notCompletedCount // not completed items count
  } // End todolist remaining function
  

}); // end TodoListController
