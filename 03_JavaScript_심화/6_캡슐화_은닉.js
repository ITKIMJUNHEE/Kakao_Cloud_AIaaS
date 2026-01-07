// 객체 리터럴 getter/setter
const inventory = {
  quantity: 10,
  get totalQuantity() { return this.quantity; },
  set totalQuantity(value) {
    if (value < 0) console.log("음수 불가");
    else this.quantity = value;
  }
};
console.log(inventory.totalQuantity);
inventory.totalQuantity = 15;
inventory.totalQuantity = -5;

// 클래스 private 필드와 getter/setter
class Student {
  #studentName = '';
  #studentID = 0;
  constructor(name, id) {
    this.#studentName = name;
    this.#studentID = id;
  }
  get name() { return this.#studentName; }
  set name(newName) { this.#studentName = newName; }
  get id() { return this.#studentID; }
  displayInfo() { console.log(`학생 이름: ${this.name}, 학번: ${this.id}`); }
}
const student1 = new Student('이영희', 2023001);
console.log(student1.name);
student1.name = '김철수';
student1.displayInfo();

// 접근 오류 테스트 (주석 해제 시 에러 발생)
// console.log(student1.#studentName); 
// console.log(student1['#studentName']);