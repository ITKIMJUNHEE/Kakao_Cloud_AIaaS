// 배열 스프레드
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
const arr3 = [4, 5, 6];
const combinedArray = [...arr1, ...arr3];
console.log(combinedArray);

function sum(a, b, c) { return a + b + c; }
const numbers = [1, 2, 3];
console.log(sum(...numbers));

// 객체 스프레드
const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1 };
const obj3 = { job: "Developer" };
const combinedObj = { ...obj1, ...obj3 };
const obj4 = { name: "Bob", age: 30 };
const updateObj = { ...obj1, ...obj4 };
console.log(updateObj);