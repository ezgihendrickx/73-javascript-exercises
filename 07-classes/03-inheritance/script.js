/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  class Animal {
    sayHello() {
      return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
  }
  class Cat extends Animal {
    //static properties/methods need to be defined before the constructor. They are valid for every "Cat", not just for an instance.
    static greeting = "Hello";
    constructor(name) {
      //Need to call "super()": calls the constructor of the parent. Even when the parent does not have a constructor, you still need to call it.
      //super() calls the constructor of the parent
      //super.method() calls a method from the parent
      super();
      super.sayHello();
      //I changed "_name" to "name", because the sayHello function uses "name".
      this.name = name;
    }
  }

  class Dog extends Animal {
    static greeting = "Hi";
    constructor(name) {
      super();
      super.sayHello();
      this.name = name;
    }
  }
  document.getElementById("run").addEventListener("click", () => {
    const catSnow = new Cat("Snow");
    const dogBrownie = new Dog("Brownie");
    console.log(dogBrownie.sayHello());
    console.log(catSnow.sayHello());
  });
})();
