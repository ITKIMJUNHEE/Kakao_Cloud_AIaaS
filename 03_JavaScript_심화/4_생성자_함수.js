// 생성자 함수
function Car(model, year) {
  this.model = model;
  this.year = year;
  this.getInfo = function() { return `${this.year} ${this.model}`; };
}
const car1 = new Car("Toyota", 2021);
console.log(car1.getInfo());

// 객체 리터럴
const animal1 = {
  type: "Dog",
  sound: "Woof",
  makeSound: function() { return `${this.type} says ${this.sound}!`; }
};
console.log(animal1.makeSound());

// 객체 반환 함수
function createAnimal(type, sound) {
  return {
    type, sound,
    makeSound: function() { return `${this.type} says ${this.sound}!`; }
  };
}
const animal2 = createAnimal("Cat", "Meow");
console.log(animal2.makeSound());

// 생성자 함수와 프로토타입
function Animal(type, sound) {
  this.type = type;
  this.sound = sound;
}
Animal.prototype.makeSound = function() { return `${this.type} says ${this.sound}!`; };
const animal4 = new Animal("Lion", "Roar");
console.log(animal4.makeSound());

// 인스턴스 확인
console.log(animal4 instanceof Animal);