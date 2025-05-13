import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let sujeto = ['Un unicornio', 'Mi vecino loco', 'Un gato ninja', 'El repartidor de pizza'];
let accion = ['escondió', 'quemó', 'pisó', 'lanzó'];
let objeto = ['mi mochila', 'los deberes', 'mi ordenador', 'el uniforme'];
let cuando = ['antes del desayuno', 'mientras dormía', 'durante la tormenta', 'en la clase de yoga'];

window.onload = function() {
  //write your code here
  document.querySelector(".alert").innerHTML = `${sujeto[Math.floor(Math.random() * sujeto.length)]}` + " " + `${accion[Math.floor(Math.random() * accion.length)]}` + " " + `${objeto[Math.floor(Math.random() * objeto.length)]}` + " " + `${cuando[Math.floor(Math.random() * cuando.length)]}` + ".";
};
