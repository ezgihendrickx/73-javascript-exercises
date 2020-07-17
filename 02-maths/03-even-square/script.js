/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById("run").addEventListener("click", function () {
    // Create an empthy array which we will fill up with 4 or 21 numbers//

    let squarenumbers = [];
    // for loop: for 1 to 21: run this loop 21 or 4 times
    for (i = 1; i * i <= 21; i++) {
      // First element of an array is [0], therefore i-1
      squarenumbers[i - 1] = i * i;
    }

    alert(squarenumbers);
  });
})();
