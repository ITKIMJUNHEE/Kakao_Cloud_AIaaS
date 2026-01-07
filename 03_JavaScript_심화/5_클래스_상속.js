// 클래스 기본
class Animal {
  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }
  makeSound() { return `${this.type} says ${this.sound}!`; }
}
const dogClass = new Animal('Dog', 'Woof');
console.log(dogClass.makeSound());

// 상속과 super
class ParentAnimal {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} makes a sound.`); }
}
class Dog extends ParentAnimal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() { console.log(`${this.name} barks.`); }
}
const myDog = new Dog('바둑이', '진돗개');
myDog.speak();