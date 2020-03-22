console.log('Model');

export default class Model {
  constructor() {
    this.todos = [
      { name: 'Alex' },
      { name: 'John' }
    ]
  }

  addData(name, age) {
    const personData = {
      name: name,
      age: age
    }

    this.todos.push(personData);
    this.onTodoListChanged(this.todos)
  }

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }
}
