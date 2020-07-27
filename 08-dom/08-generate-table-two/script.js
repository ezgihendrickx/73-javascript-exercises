/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // create table
  let multiply = "<table>";
  for (i = 1; i < 11; i++) {
    //create 11 (i) rows:
    multiply += "<tr>";
    for (e = 1; e < 11; e++) {
      //inside every row: create 11 columns (e):
      multiply += " <td>" + i * e + "</td>"; //i*e is the mathematics part, not important
    }
    multiply += "</tr>";
  }
  multiply += "</table>";
  document.getElementById("target").innerHTML = multiply;
})();
