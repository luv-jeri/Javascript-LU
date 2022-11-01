// # Prototypes
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// console.log(Person.prototype);

// Person.prototype.job = 'Developer';

// const p1 = new Person('john', 43);
// const p2 = new Person('Jane', 22);

// console.log(p1);
// console.log(p1.age);
// console.log(p1.job);

// # Inheritance

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.breadth = function () {
//     console.log(this.name, 'is Breathing...');
//   };
// }

// function Developer(skill, name, age) {
//   this.skill = skill;
//   this.name = name;
//   this.age = age;
//   this.code = function () {
//     console.log(this.name, 'is Coding...');
//   };
//   this.breadth = function () {
//     console.log(this.name, 'is Breathing...');
//   };
// }

// const dev1 = new Developer('JS', 'jonh', 32);
// const p1 = new Person('john', 32);

// p1.breadth()
// dev1.code();

// dev1.breadth()

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.breadth = function () {
//   console.log(this.name, 'is Breathing...');
// };

// function Developer(name, age, skill) {
//   this.skill = skill;
//   Person.prototype.constructor(this, name, age);
// }

// Developer.prototype.code = function () {
//   console.log('is Coding...');
// };

// Developer.prototype.__proto__ = Person.prototype;

// console.log(Developer.prototype);

// const dev1 = new Developer('jonh', 32, 'JS');

// console.log(dev1);

// # Classes

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   run() {
//     console.log('run');
//   }
//   sayHello() {
//     console.log(` ${this.name} Hello `);
//   }
// }

// class Developer extends Person {
//   constructor(name, skill) {
//     super(name)
//     this.skill = skill;
//   }

//   code(){
//     console.log('Coding')
//   }
// }

// const dev1 =  new Developer("John" ,  "JS")

// // console.log(dev1.hasOwn("name"))

// console.log(Promise.any)

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.breadth = function () {
//   console.log(`${this.name} is breadthing`);
// };

// function Developer(skill, name) {
//   this.skill = skill;
//   Person.call(this, name);
// }

// Object.setPrototypeOf(Developer.prototype, Person.prototype);

// Developer.prototype.code = function () {
//   console.log(`${this.name} is coding`);
// };

// const dev1 = new Developer('JS', 'john');

// console.log(dev1);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

//  console.log(Person.prototype);
// Person.prototype.job = 'Developer';

// const p1 = new Person('john', 32);

// console.log(p1);
// console.log(p1.name);
// console.log(p1.__proto__);
// console.log(p1.__proto__.job)
// console.log(p1.job)

// const obj = {
//   name: 'john',
// };

// console.log('Object.prototype', Object.prototype);

// console.log(obj.hasOwnProperty('name'));

// const arr_ = new Array(1, 2, 3, 4, 5);
// console.log(Array.prototype)

// arr_.push(3)

// console.log(arr_);

// const str = 'Hello';
// const str_ = new String('Hello');
// console.log(String.prototype);

// console.log(str_.at(2));

// const num = 3.3453667;
// const num_ = new Number(3);

// console.log(Number.prototype);

// console.log(num_.toPrecision(5));

// const bool = true;
// const bool_ = new Boolean(true);

// console.log(Boolean.prototype);

// console.log(bool_.valueOf());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.breadth = function () {
  console.log(`${this.name} is breathing`);
};

function Developer(skill, name, age) {
  this.skill = skill;

  Person.call(this, name, age); // ! Tell me the reason
}

Developer.prototype.code = function () {
  console.log('coding');
};

Developer.prototype.__proto__ = Person.prototype;

const dev1 = new Developer('JS', 'john', 32);

console.log(dev1);

dev1.breadth();
