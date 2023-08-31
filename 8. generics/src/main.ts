// Generics
// type을 함수의 파라미터처럼 사용

// func + generics
// 1.
function getArrayLength1(arr: number[]): number {
  return arr.length;
}
getArrayLength1([1, 2, 3]);

function getArrayLength2(arr: number[] | string[]): number {
  return arr.length;
}
getArrayLength2(["a", "b", "c"]);

function getArrayLength3(arr: number[] | string[] | boolean[]): number {
  return arr.length;
}
getArrayLength3([true, true, false]);

// 위 과정을 Generics로 해결 가능
function getArrayLength4<T>(arr: T[]): number {
  return arr.length;
}
getArrayLength4<number>([1, 2, 3]);
getArrayLength4<string>(["a", "b", "c"]);
getArrayLength4<boolean>([true, true, false]);

// 2.
const makeArr = <T, Y>(x: T, y: Y): [T, Y] => {
  return [x, y];
};

const array = makeArr<number, string>(1, "a");

// interface + generics
interface Vehicle<T> {
  name: string;
  color: string;
  option: T;
}

const car: Vehicle<{ price: number }> = {
  name: "Car",
  color: "red",
  option: { price: 1000 },
};

const bike: Vehicle<boolean> = {
  name: "Bike",
  color: "black",
  option: true,
};

// generics extends

// firstName, lastName만 필수로 받고 싶을 때
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const user1 = makeFullName({
  firstName: "John",
  lastName: "Doe",
  location: "Seoul",
});
