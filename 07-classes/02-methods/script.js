/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  class Person {
    constructor(firstname, lastname) {
      this._firstname = firstname;
      this._lastname = lastname;
    }
    get firstname() {
      return this._firstname;
    }
    get lastname() {
      return this._lastname;
    }
    sayHello() {
      return "Hello, " + this.firstname + " " + this.lastname;
    }
  }

  document.getElementById("run").addEventListener("click", function () {
    const personEzgi = new Person("Ezgi", "Hendrickx");
    console.log(personEzgi);
    console.log(personEzgi.sayHello());
  });
})();
