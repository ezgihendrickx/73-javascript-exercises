/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById("run").addEventListener("click", function () {
    let Year = document.getElementById("year").value * 1;

    function numberOfFridaythe13thsIn(jahr) {
      let count = 0;
      let listOfMonths = new Array();
      for (let month = 0; month < 12; month++) {
        let d = new Date(jahr, month, 13);
        if (d.getDay() == 5) {
          count++;
          listOfMonths[month] = month + 1;
        }
      }
      return listOfMonths;
    }
    let list = numberOfFridaythe13thsIn(Year);

    console.log(numberOfFridaythe13thsIn());

    alert(list);
  });
})();
