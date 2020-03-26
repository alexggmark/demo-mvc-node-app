console.log('Controller');

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindChange(this.changeList);
    this.view.bindAdd(this.handleAdd);
    this.changeList(this.model.list, this.model.counter);
  }

  changeList = (items, counter) => {
    this.view.displayList(items, counter);
  }

  handleAdd = item => {
    this.model.addItem(item);
  }
}
