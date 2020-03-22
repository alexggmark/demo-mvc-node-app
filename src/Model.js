console.log('Model');

export default class Model {
  constructor() {
    this.people = [
      {
        name: 'L Dot',
      },
      {
        name: 'Smiffy Boy',
      },
    ];
  }

  addName(name) {
    const personData = {
      name: name,
    }

    this.people.push(personData);
    this.onListChange(this.people);
  }


  bindListChange(callback) {
    this.onListChange = callback;
  }
}
