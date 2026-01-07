const user = {
  profile: {
    name: "홍길동",
    // address 속성이 없는 상태
  }
};

// 에러 방지: address가 없으면 에러 대신 undefined 반환
console.log(user.profile?.address?.city); 

const nullUser = null;
console.log(nullUser?.name); // 에러 없이 undefined