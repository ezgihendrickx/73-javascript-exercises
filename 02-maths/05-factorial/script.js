/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("run").addEventListener("click", function () {
    let num = document.getElementById("number").value * 1;

    let result = factorialize(num);
    //I call the function factorialize (created below) with as input "num"
    // your code here

    //Below: creating a new function called "factorialize" to make our calculation
    //this function can be used whenever you want with different inputNumber
    function factorialize(inputNumber) {
      if (inputNumber < 0) return -1;
      else if (inputNumber == 0) return 1;
      else {
        return inputNumber * factorialize(inputNumber - 1);
      }
    }
    alert(result);
  });
})();
