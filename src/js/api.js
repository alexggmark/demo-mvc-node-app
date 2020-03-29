export class Model {
  constructor() {
    this.newString = 'New String';
    this.apiData = null;
  }

  makeApiCall(route) {
    return new Promise((resolve, reject) => {
      console.log(route);
      resolve(route);
    })
  }

  getApiData() {
    this.makeApiCall('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => {
        console.log(res);
        console.log('test');
        this.apiData = res;
        return res;
      })
      .catch((err) => {
        console.error(err);
      })
  }
}

export class View {
  constructor() {
    this.app = document.getElementById('app');
    this.contentArea = document.createElement('p');
    this.contentArea.textContent = 'Working';
    this.button = document.createElement('button');
    this.button.textContent = 'Click';
    this.app.append(this.contentArea);
    this.app.append(this.button);
  }

  changeStringContent(string) {
    this.contentArea.textContent = string;
  }

  bindClickEvent(handler) {
    this.button.addEventListener('click', () => {
      handler();
    })
  }
}

export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // this.view.bindClickEvent(this.handleClick);
    this.model.getApiData();
  }

  handleClick = string => {
    this.model.apiCall();
  }

  handleClick = string => {
    this.view.changeStringContent(string);
  }
}