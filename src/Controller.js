console.log('Controller');

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // bind model.change
    // bind view.add
    // this.onchange(model.list) - to render on start
  }
}
