/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value


  const performOperation = (operation) => {
    // perform the operation

    let num1 = document.getElementById("op-one").value *1;

    let num2 = document.getElementById("op-two").value *1;

    let result;

    switch (operation) {
      case "addition":
        result = num1 + num2;

        break;

      case "substraction":
        result = num1 - num2;

        break;

      case "multiplication":
        result = num1 * num2;

        break;

      case "division":
        result = num1 / num2;

        break;
    }

    alert("The result is: " + result);
  };

  Array.from(document.querySelectorAll("button.operator")).forEach(($btn) =>
    $btn.addEventListener("click", () => (performOperation($btn.id), false))
  );
})();
