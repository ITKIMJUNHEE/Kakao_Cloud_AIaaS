function Animal(name) {
  this.name = name;
}

// 프로토타입에 메서드 추가 (모든 인스턴스가 공유)
Animal.prototype.sayName = function() {
  console.log("제 이름은 " + this.name + "입니다.");
};

const dog = new Animal("바둑이");
const cat = new Animal("나비");

dog.sayName();
cat.sayName();

// 프로토타입 체인 확인
console.log(dog.__proto__ === Animal.prototype); // true
console.log(dog.hasOwnProperty('name')); // true (자신의 속성)
console.log(dog.hasOwnProperty('sayName')); // false (상속받은 속성)