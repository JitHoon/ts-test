// keyof
// 제공된 타입의 키를 추출하여 새로운 Union 타입으로 반환

interface IUser {
  name: string;
  age: number;
  address: string;
}

type UserKeys = keyof IUser; // 'name' | 'age' | 'address' Union Type 으로 반환

const user = {
  name: "Hoon",
  age: 2,
  address: "Sun",
};

// type Use = keyof user // 에러
type Use = keyof typeof user; // 'name' | 'age' | 'address' Union Type 으로 반환

enum UserRole {
  admin,
  manager,
}

// type UserRoleKeys = keyof UserRole; // 에러
type UserRoleKeys = keyof typeof UserRole; // "admin" | "manager" Union Type 으로 반환
