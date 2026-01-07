// 배열 디스트럭쳐링
const nums = [1, 2, 3];
const [first, second, third] = nums;
const [one, , three] = nums;
const [a, b, c = 10, d = 20] = [1, 2];
console.log(first, one, c, d);

// 객체 디스트럭쳐링
const personDest = { name: "Alice", age: 25, job: "Developer" };
const { name, age, job } = personDest;
const { name: personName, age: personAge } = personDest;
const { name: n, hobby = "Reading" } = personDest;
console.log(name, personName, n, hobby);

// 함수 매개변수 디스트럭쳐링
function printPerson({ name, age }) { console.log(`이름: ${name}, 나이: ${age}`); }
printPerson({ name: "Bob", age: 30 });