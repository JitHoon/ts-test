// Call Signature
// 함수 타입을 재사용하고 싶을 때 사용

// 소괄호 안에 매개변수를 넣어주고, 반환하는 부분의 타입을 => 가 아닌, : 으로 작성
interface getLikeNumber {
  (like: number): number;
}

interface Post {
  id: number;
  title: string;
  getLikeNumber: getLikeNumber;
  // getLikeNumber(like: number): number;
}

const post1: Post = {
  id: 1,
  title: "post 1",
  getLikeNumber(like: number) {
    return like;
  },
};

post1.getLikeNumber(1);

// Index Signature
// 새로운 미리 지정하지 않은 데이터가 들어올 때 타입 지정하는 방법
// [key: string]: unknown;

// object Index Signature
interface Post2 {
  [key: string]: unknown;
  id: number;
  title: string;
}

const post2: Post2 = {
  id: 2,
  title: "post 2",
};

// 새로운 데이터
post2["desctiption"] = "post 1 desctiption";
post2["pages"] = 300;

// array Index Signature
interface Names {
  [item: number]: string;
}

const userNames: Names = ["John", "Kim", "Joe"];
