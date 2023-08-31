// Implement
// 확장하는 개념이 아닌, type 체크를 위해서 사용.
// Implement한 Class에 있는 값을 직접 명시해야 오류가 사라짐

class Car {
  mileage = 0;
  price = 2;
  color = "black";
}

interface Part {
  seats: number;
  tire: number;
}

class Ford implements Car, Part {
  mileage = 1;
  price = 2;
  color = "white";

  seats = 1;
  tire = 2;
}
