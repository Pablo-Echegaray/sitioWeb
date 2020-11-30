//=====================================
//Efecto marquesina el en span "envios a todo el pais"
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
//======================================
//Funcionalidad boton hamburgesa
let menu = document.querySelector(".material-icons");
let drawer = document.querySelector("#drawer");
let contador = 0;
menu.addEventListener("click", function (e) {
  e.stopPropagation();
  cambiar();
});

drawer.addEventListener("click", (e) => {
  e.stopPropagation;
  drawer.style.display = "none";
});

function cambiar() {
  if (contador === 0) {
    drawer.style.display = "block";
    contador = 1;
  } else {
    drawer.style.display = "none";
    contador = 0;
  }
}

//=================================
//boton scroll
window.onscroll = function () {
  if (document.documentElement.scrollTop > 101) {
    document.querySelector(".go-top-container").classList.add("show");
  } else {
    document.querySelector(".go-top-container").classList.remove("show");
  }
};

document.querySelector(".go-top-container").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

//====================================
// Modal y evento de click en tarjetas de productos

let tarjetas = document.querySelectorAll(".tarjeta");
let modal = document.querySelector("#modal");
let btn_cerrar = document.getElementById("cerrarModal");

tarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener("click", () => {
    modal.style.display = "flex";
    console.dir(tarjeta);
    let texto_interno = tarjeta.innerText;
    switch (texto_interno) {
      case "Red Tejida":
        cambiarH1(texto_interno);
        break;
      case "Red Extruida":
        cambiarH1(texto_interno);
        break;
      case "Red Protectora":
        cambiarH1(texto_interno);
        break;
      case "Red para Ajo":
        cambiarH1(texto_interno);
        break;
      case "Precintos":
        cambiarH1(texto_interno);
        break;
      case "Esponja SPA":
        cambiarH1(texto_interno);
        break;
    }
  });
});

btn_cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

function cambiarH1(texto) {
  document.querySelector("#imagenes").childNodes[3].innerText = texto;
}
