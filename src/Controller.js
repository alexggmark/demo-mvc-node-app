console.log('Controller');

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindTodoListChanged(this.onTodoListChanged)
    this.view.bindAddTodo(this.handleAddTodo)

    this.onTodoListChanged(this.model.todos);
  }

  onTodoListChanged = todos => {
    this.view.displayTodos(todos);
  }

  handleAddTodo = todoText => {
    this.model.addData(todoText)
  }
}
