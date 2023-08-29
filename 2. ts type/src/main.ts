let firstName: string = "Doe";
let lastName: string = "John";

// Array
// 한 가지 타입만 가지는 배열
let name1: string[] = ["John", "Kim"];
let name2: Array<string> = ["John", "Kim"];

// Union (2개 이상의 타입을 허용)
let union: string | number;
union = "hi";
union = 123;

// 여러 타입을 가지는 배열
let array1: (string | number)[] = ["John", 1, 2];
let array2: Array<string | number> = ["John", 1, 2];

// 읽기 전용 배열 생성 readonly
let stringAttay: readonly string[] = ["A", "B"];
let numberArray: ReadonlyArray<number> = [1, 2];
// stringAttay.push("C"); // 에러
// numberArray.push("C"); // 에러

// Tuple
// 튜플은 배열과 비슷하지만 해당 자리에 정해진 타입
//고정된 길이를 지켜야 합니다.
let tuple1: [string, number];
tuple1 = ["hoon", 2];
// tuple1 = [2, "hoon"]; // 에러

// 튜플 타입의 배열 (2차원 배열)
let users: [number, string][];
users = [
  [2, "hoon"],
  [1, "sun"],
];

// 같은 타입을 넣는다는 가정하에 push로 고정된 길이를 늘릴 수 있음
let tuple2: [string, number] = ["a", 1];
tuple2.push(2);
// tuple2.push(true); // 에러

// Any
// 모든 타입으로 어떠한 값도 할당 가능
// 되도록 사용 X
// 3rd party 라이브러리 사용 시 타입을 모를 때만 사용
// 다른 타입에 할당 가능
let alpabet: any = "abc";
alpabet = 1;
alpabet = [];
let string1: string = alpabet;

// Unknown
// 알 수 없는 타입을 의미하며,
// 어떠한 값도 할당 가능 하지만 unknown을 다른 타입에는 할당 불가능
let iDontKnow: unknown = false;
// let string1: string = iDontKnow; // 에러
let string2: string = iDontKnow as string; // 강제로 할당

// Object
// typeof 연사자가 object로 반환하는 모든 타입
// typeof {}, [],  null -> object로 반환됨, 틀렸지만 이미 많이 사용됨
// typeof new Date()
let obj1: object = {};
let obj2: object = [];
// let obj3: object = null; // "strict": true 설정 때문에 에러
let data: object = new Date();

// 객체 속성에 대한 타입을 개별적으로 지정
let obj3: { id: number; title: string } = {
  id: 1,
  title: "title1",
  // desc: 'desc 2' // 에러
};

// Function
let func1: (x: number, y: number) => number;
func1 = function (x, y) {
  return x * y;
};

// 매개변수 및 반환 값이 없을 때
let func2: () => void;
func2 = function () {
  console.log("hi");
};

// Null, Undefined
/* 에러 "stricNullChecks": false로 설정 시 할당 가능

  let number1: number = undefined;
  let array: any[] = null;
  let undefined1: undefined = null;
  let null1: null = undefined;
  let void1: void = null;
*/

let void2: void = undefined; // 예외, 할당 가능

// Void
// 주로 값을 반환하지 않는 함수에서 사용
function greeting(): void {
  console.log("hi");
}

const hi: void = greeting();
console.log(hi); // undefined

// Never
// 어떤 일이 절대 일어나지 않을 것이라고 확신할 때 사용
// 1. Error를 Throw 할 때
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

// 2. 무한 루프
function keepProcessing(): never {
  while (true) {
    console.log("Hi");
  }
}
