console.log('View');

export default class View {
  constructor() {
    this.app = this.querySelector('#app');
    this.title = this.createElement('h1');
    this.title.textContent = 'The list';
    this.counter = this.createElement('p');
    this.list = this.createElement('ul');
    this.item = this.createElement('li');
    this.button = this.createElement('button');
    this.button.textContent = 'Add Barry!';
    this.app.append(this.title);
    this.app.append(this.counter);
    this.app.append(this.button);
    this.app.append(this.list);
  }

  querySelector(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  createElement(tag) {
    const element = document.createElement(tag);
    return element;
  }

  // display list
  displayList(items, counter) {
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }

    this.counter.textContent = counter;

    items.forEach((item) => {
      const element = this.createElement('li');
      element.textContent = item;
      this.list.append(element);
    })
  }

  // bindadd
  bindAdd(handleAdd) {
    const name = 'Barry';

    this.button.addEventListener('click', () => {
      handleAdd(name);
    })
  }
}