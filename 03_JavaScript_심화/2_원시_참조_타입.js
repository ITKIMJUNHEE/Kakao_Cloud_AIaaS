// 원시 타입의 불변성
let a = 10;
let b = a;
b = 20;
console.log(a); 
console.log(b);

// 참조 타입의 가변성
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value);
console.log(obj2.value);

// 참조 타입 예제
let personRef = { name: "Alice", age: 30 };
let numbersRef = [1, 2, 3, 4, 5];
function greetRef(a, b) {
  a.name = "John";
  a.age = 26;
  b[0]++;
}
greetRef(personRef, numbersRef);
console.log(personRef, numbersRef);