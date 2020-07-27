/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var gallery = [
    "../../_shared/img/bell.svg",
    "../../_shared/img/clock.svg",
    "../../_shared/img/compass.svg",
    "../../_shared/img/lemon.svg",
    "../../_shared/img/map.svg",
  ];

  // select the image first and make a variable of index number
  let changeimg = document.querySelector(".material img");
  let i = 1;
  // use if statement for the carousel
  document.getElementById("next").addEventListener("click", () => {
    //instead of = you need == otherwise defines variable
    if (i == gallery.length) {
      i = 0;
    }
    changeimg.setAttribute("src", gallery[i]);
    i++;
  });
})();
