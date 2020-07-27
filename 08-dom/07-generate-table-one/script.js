/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  //a random array to show some content in the table
  var MOUNTAINS = [
    { Mountain: "Palandoken" }, //you can add also country: "Turkey"
    { Mountain: "Tendurek" },
    { Mountain: "Uludag" },
    { Mountain: "Koroglu" },
    { Mountain: "Kackar" },
    { Mountain: "Erciyes" },
    { Mountain: "Toros" },
    { Mountain: "Uludoruk" },
    { Mountain: "Suphan" },
    { Mountain: "Ararat" },
  ];
  // It's a good idea to build a function buildTable, but not necessary.

  //But you can reuse this one with other data

  function buildTable(data) {
    var table = document.createElement("table"); //create the table in HTML
    var thead = document.createElement("thead"); //create the table head
    var tbody = document.createElement("tbody"); //create the table body
    var headRow = document.createElement("tr"); //create the first table row (the header)
    //below: creating a table header ("Mountain")--> was not in the exercise, but good to do
    ["Mountain"].forEach(function (el) {
      //For each element (el) in the table,
      var th = document.createElement("th"); //a new table head is created (in this case 1: "Mountain")
      th.appendChild(document.createTextNode(el)); //text field is created so text can be added;
      headRow.appendChild(th); //table header is shown in the head (1st) row
    });
    thead.appendChild(headRow); //1st row is added to table header
    table.appendChild(thead);
    //below: creating the actual table (under the header)
    data.forEach(function (el) {
      var tr = document.createElement("tr"); //create a standard row
      for (var o in el) {
        //for every element in the array (o could be replace by i)
        var td = document.createElement("td"); //create the table column
        td.appendChild(document.createTextNode(el[o])); //create text field and add Mountains[i] to it
        tr.appendChild(td); //add the td element to the table row <tr><td>Uludag</td></tr>
      }
      tbody.appendChild(tr); //add the table row to the table body
    });
    table.appendChild(tbody); //add the table body to the table
    return table;
  }
  //below: when you open the page, run the function with array Mountains as input
  //therefore easy to change to show other tables
  window.onload = function () {
    document.getElementById("target").appendChild(buildTable(MOUNTAINS));
  };
})();

// //code for example also works when you have an array with more properties:
// var MOUNTAINS = [

//   { Mountain: "Palandoken", country: "Turkey"},

//   { Mountain: "Tendurek", country: "Turkey" },

// In this case it will create 2 columns automatically, one with the mountain and one with the country
