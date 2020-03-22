console.log('Model');

export default class Model {
  constructor() {
    this.list = [
      'John',
      'Mark',
      'Toby'
    ]
  }

  // add
  addItem(item) {
    this.list.push(item);
    this.changeList(this.list);
  }

  // bindchange
  bindChange(callback) {
    this.changeList = callback;
  }
}