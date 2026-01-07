// 1. 메서드 호출 시 this
const person = {
  name: "김철수",
  greet() {
    console.log("메서드 this:", this.name);
  }
};
person.greet();

// 2. 생성자 함수 호출 시 this
function User(name) {
  this.name = name;
}
const user1 = new User("이영희");
console.log("인스턴스 this:", user1.name);

// 3. 화살표 함수의 this (상위 스코프를 따름)
const group = {
  title: "팀A",
  members: ["철수", "영희"],
  showMembers() {
    this.members.forEach((member) => {
      console.log(`${this.title}: ${member}`);
    });
  }
};
group.showMembers();