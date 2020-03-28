export class Model {
  constructor() {
    this.oldString = 'Old String';
    this.newString = 'New String';
  }
}

export class View {
  constructor() {
    this.app = document.getElementById('app');
    this.contentArea = document.createElement('span');
    this.contentArea.textContent = 'Working';
    this.app.append(this.contentArea);
  }

  replaceText(string) {
    this.contentArea.textContent = string;
  }

  bindContentUpdate(callback) {
    callback();
  }
}

export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindContentUpdate(this.updateText);
  }

  updateText = string => {
    this.view.replaceText(string);
  }
}