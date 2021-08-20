let bits = {
  bit_0: 0,
  bit_1: 1,
  showBits() {
    return `bits are: ${this.bit_0} and ${this.bit_1}`;
  },
};
class Person {
  constructor(name, motto) {
    this.name = name;
    this.motto = motto;
  }
  speaks() {
    return `${this.name} speaks: ${this.motto}`;
  }
}
const personBobMarley = new Person("Bob Marley", "No Woman, No Cry");
console.log(personBobMarley.speaks());
class Programmer extends Person {
  constructor(name, motto) {
    super(name, motto);
  }
  codes() {
    return bits.showBits();
  }
}
const person_MR = new Programmer("Michal Radomski", "No Code No Fun");
console.log(`${person_MR.speaks()} and ${person_MR.codes()}`);
