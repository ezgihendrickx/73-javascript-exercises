/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  class Person {
    constructor(firstname, lastname) {
      this._firstname = firstname;
      this._lastname = lastname;
    }

    get name() {
      return this._firstname + " " + this._lastname;
    }

    set splitName(name) {
      this._firstname = this._lastname;
      console.log(firstname);
    }
  }
  document.getElementById("run").addEventListener("click", () => {
    let personWillem = new Person("Willem", "Hendrickx");
    console.log(personWillem);
    console.log(personWillem.name);
  });
})();
