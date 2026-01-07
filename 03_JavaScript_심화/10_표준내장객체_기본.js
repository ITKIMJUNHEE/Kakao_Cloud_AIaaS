// 기본 자료형 vs 객체 자료형
let number = 273;
let string = '안녕하세요';
console.log(typeof number, typeof string);

let stringObj = new String('음료 | 1800원');
console.log(typeof stringObj);
console.log(stringObj.split('|'));

// 프로토타입을 통한 메서드 추가
Number.prototype.method = function() { return 'Primitive Method'; };
let primitiveNumber = 123;
console.log(primitiveNumber.method());