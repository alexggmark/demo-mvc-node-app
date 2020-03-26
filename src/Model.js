console.log('Model');

export default class Model {
  constructor() {
    this.list = [
      'John',
      'Mark',
      'Toby'
    ];
    this.counter = 0;
  }

  // add
  addItem(item) {
    this.list.push(item);
    this.counter++;
    this.changeList(this.list, this.counter);
  }

  // bindchange
  bindChange(callback) {
    this.changeList = callback;
  }
}