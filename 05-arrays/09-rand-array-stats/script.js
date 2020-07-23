/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById("run").addEventListener("click", function () {
    // First create a new empthy Array
    let randomNumbers = new Array();
    // Then create a for-loop, to generate and show 10 random numbers
    for (i = 1; i <= 10; i++) {
      randomNumbers[i - 1] = Math.floor(Math.random() * 100) + 1;
      // There are 10 boxes to show. ID-names are "n-1", "n-2" etc. with below code in the for-loop you only need to write 1 innerhtml and not 10.

      document.getElementById("n-" + i).innerHTML = randomNumbers[i - 1];
    }
    //calculate the mathematical functions
    let arrayMin = Math.min(...randomNumbers);
    let arrayMax = Math.max(...randomNumbers);
    let arraySum = randomNumbers.reduce((a, b) => a + b, 0); //strange formula copied from google.
    let arrayAvg = arraySum / randomNumbers.length;
    //show the result of calculation
    document.getElementById("min").innerHTML = arrayMin;
    document.getElementById("max").innerHTML = arrayMax;
    document.getElementById("sum").innerHTML = arraySum;
    document.getElementById("average").innerHTML = arrayAvg;
  });
})();
