/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // "source" element is a span, retrieved to original. attribute is a imglink inside of the span in this case.
  let original = document.getElementById("source");
  let imglink = original.getAttribute("data-image");
  // imgtag is a html img tag created here: <img></img>
  let imgtag = document.createElement("img");
  //<img src = imgLink></img>
  imgtag.setAttribute("src", imglink);
  //put the img tag inside of "target div"
  document.getElementById("target").appendChild(imgtag);
  original.remove();
})();
