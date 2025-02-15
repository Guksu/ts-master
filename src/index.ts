// TS는 컴파일 과정을 끝내면 JS로 변환 되기 때문에, JS로 변환된 파일을 실행해야 한다.
// 따라서, index.ts 파일을 실행하면, index.js 파일이 실행된다.
// index.js 파일은 dist 폴더에 생성된다.

// TS는 기본적으로 모든 파일을 전역모듈로 판단한다.
// 즉 다른 파알에서 같은 변수명이 있다면 오류가 발생한다.
// 이를 막기 위해서 파일안에 export {} 를 사용하여 모듈화를 시킨다.
// 혹은 moduleDetection을 사용하여 모듈화를 시킨다.

// --------------------------------------------

//tuple이란 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미한다.
// 이중배열에서 각 요소의 타입이 중요한 경우 사용하여 에러를 방지할 수 있다.
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error
x[3] = "world"; // Error

// 인덱스 시그니처
type IndexSignature = {
  // 이 규칙만 위반하지 않으면 되므로 빈 객체도 허용한다.
  [key: string]: string;
};

const obj: IndexSignature = {
  name: "name",
  age: "age",
};

const obj2: IndexSignature = {};

// TS는 집합의 관점으로 보면 된다.
// 리터럴타입으로 지정된 num2는 크케 number타입에 해당하므로 num1에 할당할 수 있다.
// 하지만 그 반대는 불가하다.

let num1: number = 10;
let num2: 10 = 10;

// UpCasting
num1 = num2;
// DownCasting
num2 = num1;

// Union 타입
let a: string | number;
a = 10;
a = "hello";

type Dog = {
  name: string;
  color: string;
};

type Human = {
  name: string;
  age: number;
};

// name만 가지고 있다면 Dog와 Human 어디에도 포함되지 않기 때문에 오류가 발생한다.
const unionError: Dog | Human = {
  name: "name",
};

// Dog와 Human의 모든 속성을 가지고 있기 때문에 오류가 발생하지 않는다.
const union: Dog | Human = {
  name: "name",
  color: "color",
  age: 10,
};

// Intersection 타입(교집합 타입)
// Dog와 Human의 모든 속성을 가지고 있어야 한다.
const intersection: Dog & Human = {
  name: "name",
  age: 10,
  color: "color",
};

// as const를 사용하면 객체의 값을 readonly로 만들 수 있다.
const dog = {
  name: "dog",
  age: 10,
} as const;

// 타입 좁히기
function func(value: string | number | Date | null | Dog) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else if (value instanceof Date) {
    console.log(value.toISOString());
  } else if (value && "name" in value) {
    // Dog타입은 클래스가 아니므로 instanceof를 사용할 수 없다.
    // 따라서 in을 사용해서 타입을 좁힌다.
    console.log(value.name);
  }
}
