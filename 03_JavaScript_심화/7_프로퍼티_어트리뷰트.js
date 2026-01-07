// 데이터 프로퍼티 정의
const personAttr = {};
Object.defineProperty(personAttr, 'name', {
  value: 'Alice',
  writable: false,
  enumerable: true,
  configurable: false
});
console.log(personAttr.name);
personAttr.name = 'Bob'; 
console.log(personAttr.name);

// 접근자 프로퍼티 정의
const product = { _price: 100 };
Object.defineProperty(product, 'price', {
  get() { return `$${this._price}`; },
  set(value) {
    if (value > 0) this._price = value;
    else console.log('가격은 0보다 커야 합니다.');
  }
});
console.log(product.price);
product.price = 150;
console.log(product.price);