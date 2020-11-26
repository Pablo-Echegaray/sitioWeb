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
}, 100);
