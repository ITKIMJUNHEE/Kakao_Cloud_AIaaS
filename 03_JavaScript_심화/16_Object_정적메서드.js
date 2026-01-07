// 객체 생성 및 복사
let proto = { greet() { console.log("Hello!"); } };
let objCreate = Object.create(proto);
objCreate.name = "John";

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
Object.assign(target, source);
console.log(target);

// 데이터 확인
const personObj = { name: "Alice", age: 25, occupation: "Engineer" };
console.log(Object.keys(personObj));
console.log(Object.values(personObj));
console.log(Object.entries(personObj));

// 객체 보호
const protect = { name: "Alice", age: 25 };
Object.preventExtensions(protect);
protect.job = "Engineer"; // 무시됨
console.log(protect.job);

Object.seal(protect);
delete protect.name; // 무시됨

Object.freeze(protect);
protect.age = 30; // 무시됨
console.log(Object.isFrozen(protect));