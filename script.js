// Base Person class
class Person {
  constructor(name, age) {
    this._name = name; // private-like convention with _
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }
}

// Student class extends Person
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher class extends Person
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// ✅ Example usage:

// Person
const person = new Person("John", 25);
console.log(person.name);  // Output: John
person.age = 30;           // Setter updates age
console.log(person.age);   // Output: 30

// Student
const student = new Student("Alice", 22);
student.study();           // Output: Alice is studying

// Teacher
const teacher = new Teacher("Bob", 40);
teacher.teach();           // Output: Bob is teaching
