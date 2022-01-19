/*js pour la bar de progression*/
var gvalue = 1;
function abc() {
  var progressExample = document.getElementById("progress-javascript-example");
  setInterval(function () {
    if (gvalue < 100) {
      gvalue++;
      progressExample.value = gvalue;
    }
    abc();
  }, 1000);
}
