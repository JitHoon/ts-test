// Partial utility type
// 특정 타입의 부분 집합을 만족하는 타입을 정의
interface Address {
  email: string;
  address: string;
}

const me: Partial<Address> = {};
const you: Partial<Address> = { email: "abc@example.com" };
const all: Address = { email: "abc@example.com", address: "address" };

// Pick utility type
// 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의

interface Todo {
  title: string;
  description: string;
  complete: boolean;
}

const todo: Pick<Todo, "title" | "complete"> = {
  title: "clean room",
  complete: false,
};

// Omit
// 특정 속성만 생략했을 때
interface Todo2 {
  title: string;
  description: string;
  complete: boolean;
  createAt: number;
}

const todo2: Omit<Todo2, "description"> = {
  title: "clean room",
  complete: false,
  createAt: 123123,
};

// Required

type User = {
  firstName: string;
  lastName: string;
};

let firstUser: User = {
  firstName: "hoon",
};

let secondUser: Required<User> = {
  firstName: "sun",
};

// Record
// <Keys 타입, Value 타입>

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "basd" | "asd";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  basd: { age: 5, breed: "Maine" },
  asd: { age: 16, breed: "British" },
};

// ReturnType
// 함수의 반환 타입
type T0 = ReturnType<() => string>; // type T0 = string;
type T1 = ReturnType<(s: string) => void>; // type T1 = void;

function fn(str: string) {
  return str;
}

const a: ReturnType<typeof fn> = "Hello"; // const a: string= "Hello";
