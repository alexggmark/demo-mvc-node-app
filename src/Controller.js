console.log('Controller');

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindListChange(this.onListChange);
    this.view.bindAdd(this.handleAdd);

    this.onListChange(this.model.people);
  }

  onListChange = people => {
    this.view.displayPeopleList(people);
  }

  handleAdd = person => {
    this.model.addName(person);
  }
}
