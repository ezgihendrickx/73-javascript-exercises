/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const fruits = [
    "cerise",
    "durian",
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "fraise",
    "durian",
    "pêche",
    "cerise",
    "raisin",
    "cerise",
  ];
  document.getElementById("run").addEventListener("click", function () {
    let unique = [...new Set(fruits)];
    // https://wsvincent.com/javascript-remove-duplicates-array/#:~:text=There%20are%20multiple%20ways%20to,automatically%20remove%20duplicates%20for%20us.
    console.log(unique);
  });
})();
