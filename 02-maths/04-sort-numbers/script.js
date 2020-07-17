/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value
  let array1 = document.getElementById("numbers").value.split(", ");
  console.log(array1);

  document.getElementById("run").addEventListener("click", function () {
    // Sort() sorts the array alphabetically (2 will be shown after 19)
    let array2 = array1.sort((a, b) => a - b);
    // sort the array from small to large. b-a would sort it from large to small
    console.log(array2);
    document.getElementById("run").innerHTML = array2;
  });
})();
