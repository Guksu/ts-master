type Grade = "A+" | "A";

class Student {
  public name: string;
  public age: number;
  public grade: Grade;

  constructor(name: string, age: number, grade: Grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getGrade() {
    console.log(this.grade);
  }
}

class StudentEx extends Student {
  //  외부에서 접근 불가하고 내부 메서드만 접근 가능
  private level: string;

  // 상속되는 경우에는 접근 가능하지만 외부에선 접근 불가
  protected proLevel: string;

  constructor(name: string, age: number, grade: Grade, proLevel: string) {
    super(name, age, grade);
    this.proLevel = proLevel;
  }
}

let aPerson = new Student("name", 10, "A+");

// TS에서 클래스는 객체처럼 사용 가능하다.
let bPerson: StudentEx = {
  name: "a",
  age: 10,
  getGrade() {},
  grade: "A",
};
