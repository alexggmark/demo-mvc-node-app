console.log('View');

export default class View {
  constructor() {
    this.app = this.querySelector('#app');

    this.list = this.createElement('li');
    this.form = this.createElement('form');
    this.input = this.createElement('input');
    this.button = this.createElement('button');
    this.button.textContent = 'Add';

    this.form.appendChild(this.input);
    this.form.appendChild(this.button);

    this.app.appendChild(this.form);
    this.app.appendChild(this.list);
  }

  querySelector(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  createElement(tag) {
    const element = document.createElement(tag);
    return element;
  }

  get _inputValue() {
    return this.input.value;
  }

  displayPeopleList(people) {
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }

    people.forEach((person) => {
      const element = this.createElement('li');
      element.textContent = person.name;

      this.list.append(element);
    })
  }

  bindAdd(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault();

      if (!this._inputValue) { return; }
      handler(this._inputValue);
    })
  }
}