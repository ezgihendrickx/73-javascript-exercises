/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const fruits = [
    "apple",
    "perry",
    "strawberry",
    "tomato",
    "kiwi",
    "banana",
    "orange",
    "mandarin",
    "durian",
    "peach",
    "grapes",
    "cherry",
  ];

  document.getElementById("run").addEventListener("click", function () {
    //This one line does the same thing as the code below if which is commented out
    let list = fruits.includes("apple");
    //let list = "No";
    // fruits.forEach(function (item, i) {
    //    if (item == "apple") {
    //    list = "Yes";
    //      }
    //   });
    console.log(list);
  });
})();
