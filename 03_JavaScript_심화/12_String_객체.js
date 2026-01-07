// 문자열 메서드 사용법
let str = ' abc';
str = str.toUpperCase();
console.log(str);

// 메서드 체이닝
let chainStr = 'Hello World';
let array = chainStr.toLowerCase().replace(' ', '').split('');
console.log(array);