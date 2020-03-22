console.log('View');

export default class View {
  constructor() {
    this.app = this.querySelector('#app');
  }

  querySelector(selector) {
    const element = document.querySelector(selector);
    return element;
  }
}