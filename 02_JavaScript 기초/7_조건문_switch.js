console.log("--- 5. Switch문 실습 ---");

let score = 85;

// switch (true)를 사용하여 각 case의 조건을 평가함
switch (true) {
    case (score >= 90):
        console.log("A");
        break;
    case (score >= 80):
        console.log("B");
        break;
    case (score >= 70): 
        console.log("C");
        break;
    default:
        console.log("F");
}