
class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set setAge(newAge) {
    this._age = newAge;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
const person = new Person("John", 25);
console.log(person.name);

person.setAge = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

const student = new Student("Alice", 22);
student.study();

const student1 = new Student("John", 22);
student1.study();


const teacher = new Teacher("Alice", 40);
teacher.teach();

const teacher1 = new Teacher("John", 40);
teacher1.teach();

window.Person = Person;
window.Student = Student;
window.Teacher=Teacher;