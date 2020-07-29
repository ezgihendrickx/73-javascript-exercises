/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  //define variables and get elements from HTML

  let button = document.getElementById("increment");

  let output = document.getElementById("target");

  //inventory (when loading the page) is "output.innerHTML" = 0 when the page is loaded for the first time

  //when inventory has been increased previously, the value in the localStorage is used

  let inventory = Math.max(output.innerHTML * 1, localStorage.getItem("inv"));

  output.innerHTML = inventory;

  //function: when you click the button, inventory increases by 1

  //and is saved in local storage to be used later (above) when the page is reloaded/reopened.

  button.onclick = function () {
    inventory++;

    localStorage.setItem("inv", inventory);

    output.innerHTML = localStorage.getItem("inv");
  };
})();
