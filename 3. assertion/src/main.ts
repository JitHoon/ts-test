interface Foo {
  bar: number;
  bas: string;
}

// let foo = {};
// foo.bar = 123; // 에러
// foo.bas = "hello"; // 에러

let foo = {} as Foo;
foo.bar = 123;
foo.bas = "hello";

const bodyElement = document.querySelector("body");
// bodyElement.innerText = "Hello"; //에러

// as 사용
const bodyElement1 = document.querySelector("body") as HTMLBodyElement;
bodyElement1.innerText = "Hello";

// null이 아님을 선언
const bodyElement2 = document.querySelector("body");
bodyElement2!.innerText = "Hello";

// 타입 가드
const bodyElement3 = document.querySelector("body");
if (bodyElement3) {
  bodyElement3.innerText = "Hello";
}
bodyElement3 ? (bodyElement3.innerText = "Hello") : console.log("err");
