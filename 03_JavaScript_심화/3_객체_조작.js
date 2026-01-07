// 객체나 배열을 키로 사용
const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];
const obj = { [objKey]: '객체 키', [arrKey]: '배열 키' };
console.log(obj[objKey], obj[arrKey]);
console.log(obj['[object Object]']);

// 프로퍼티 삭제
let personDel = { name: "Alice", age: 30, job: "Developer" };
delete personDel.job;
console.log(personDel);
console.log(personDel.job);

// 키의 동적 사용
const itemDynamic = { name: '휴대폰', color: 'white', price: 100000 };
function addModifyProperty(obj, key, value) { obj[key] = value; }
addModifyProperty(itemDynamic, 'inch', 16);
console.log(itemDynamic);

function deleteProperty(obj, key) { delete obj[key]; }
deleteProperty(itemDynamic, 'color');
console.log(itemDynamic);

// 단축 표현
const x = 10, y = 20;
const objShort = { x, y };
console.log(objShort);

function createItem(name, cost, stock) { return { name, cost, stock }; }
console.log(createItem('의자', 25000, 10));

// 메서드 축약
const userShort = {
  firstName: "이순신",
  greet(formal) {
    return formal ? `안녕하십니까, ${this.firstName}입니다.` : `안녕하세요, ${this.firstName}입니다.`;
  }
};
console.log(userShort.greet(true));