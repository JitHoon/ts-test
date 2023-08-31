// func overloading을 통해 타입 재사용 가능
function add1(a: string, b: string): string {
  return a + b;
}

function add2(a: number, b: number): number {
  return a + b;
}

console.log(add1("hello", "world"));
console.log(add2(2, 1));

// 1. 타입 선언

// 2. 함수 구현
