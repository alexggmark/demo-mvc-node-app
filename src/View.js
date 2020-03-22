console.log('View');

export default class View {
  constructor() {
    this.app = this.getElement('#app');

    this.form = this.createElement('form');
    this.input = this.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = 'Add item';
    this.input.name = 'todo';

    this.submitButton = this.createElement('button');
    this.submitButton.textContent = 'Submit';

    this.todoList = this.createElement('ul')

    this.form.append(this.input, this.submitButton)

    this.app.append(this.form, this.todoList)
  }

  createElement(tag) {
    const element = document.createElement(tag);

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  get _todoText() {
    return this.input.value
  }

  displayTodos(todos) {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    if (todos.length === 0) {
      const p = this.createElement('p');
      p.textContent = 'No todos';
      this.todoList.append(p);

      return;
    }

    todos.forEach((todo) => {
      const li = this.createElement('li');

      li.textContent = todo.name;

      this.todoList.append(li);
    })
  }

  bindAddTodo(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault()

      if (this._todoText) {
        handler(this._todoText)
      }
    })
  }
}