// interface
interface Foo {
  far: number;
}

interface Boo extends Foo {
  bar: boolean;
}

const person: Boo = {
  far: 123,
  bar: true,
};

// type
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};

const bear1: Bear = {
  name: "hoon",
  honey: true,
};

// 선언 병합

// interface은 가능
interface AAA {
  far: number;
}

interface AAA {
  fab: number;
}

const BBB: AAA = {
  far: 123,
  fab: 3212,
};

// type은 불가능
type DDD = {
  far: number;
};

/*
type DDD = {
  fab: number;
};

const CCC: DDD = {
  far: 123,
  fab: 3212,
};
*/
