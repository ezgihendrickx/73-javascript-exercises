/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // you define an action(function) which happens when specific event happens in this case click
  document.getElementById("run").addEventListener("click", function () {
    let colorInput = document.getElementById("color").value;
    // first select the correct DOM in these case body, then style it just like in CSS
    document.body.style.backgroundColor = colorInput;
  });

  // your code here
})();
