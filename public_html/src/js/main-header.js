/* 
 Created on : 06-sep-2019, 10:14:58
 Author     : Raul Vela
 */

function desplegar() {
  var x = document.getElementById("bar-desplegable");
  if (x.className === "bar-main") {
    x.className += " responsivo";
  } else {
    x.className = "bar-main";
  }
}