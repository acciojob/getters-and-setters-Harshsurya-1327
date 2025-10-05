// Base class: Person
class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name(): string {
    return this._name;
  }

  // Setter for age
  set age(age: number) {
    this._age = age;
  }
}

// Subclass: Student
class Student extends Person {
  study(): void {
    console.log(`${this.name} is studying`);
  }
}

// Subclass: Teacher
class Teacher extends Person {
  teach(): void {
    console.log(`${this.name} is teaching`);
  }
}



const student = new Student("Alice", 20);
student.study();  // Output: Alice is studying

const teacher = new Teacher("Mr. Smith", 40);
teacher.teach();  // Output: Mr. Smith is teaching

student.age = 21; // Uses setter
console.log(student.name); // Uses getter: Output: Alice

