let texto = "¡ Envios - a - todo - el - pais ! - Comunicate - al - 1111111111";
let span = document.querySelector("#containSlide").childNodes[3];
console.log(span);
span.innerText = "";
let counter = 0;
let intervalo = setInterval(() => {
  if (counter < texto.length) {
    span.innerText += texto[counter];
    counter++;
  } else {
    span.innerText = "";
    counter = 0;
  }
  if (counter === texto.length) {
    clearInterval(intervalo);
  }
}, 200);

let menu = document.querySelector(".material-icons");
let drawer = document.querySelector("#drawer");
let contador = 0;
menu.addEventListener("click", function (e) {
  e.stopPropagation();
  if (contador === 0) {
    drawer.style.display = "block";
    contador = 1;
  } else {
    drawer.style.display = "none";
    contador = 0;
  }
});
