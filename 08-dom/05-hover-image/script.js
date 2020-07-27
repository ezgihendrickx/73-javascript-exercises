/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let kissImage = document.querySelector(".material img");
  // those are 2 links first one original img other one winkimage
  let imagelink = kissImage.getAttribute("src");
  let wink = kissImage.getAttribute("data-hover");
  // created mouse hover function
  kissImage.onmouseover = () => {
    //<img src = wink></img>
    kissImage.setAttribute("src", wink);
  };
  kissImage.onmouseout = () => {
    //<img src = imagelink></img>
    kissImage.setAttribute("src", imagelink);
  };
})();
