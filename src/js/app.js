import ErrorRepository from './ErrorRepository';

class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть в команде!');
    }
    this.members.add(character);
  }

  addAll(...characterList) {
    for (const item of characterList) {
      this.members.add(item);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}

const repo = new ErrorRepository();
console.log(repo);

export default Team;
