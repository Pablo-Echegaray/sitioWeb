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
let arrRutaImg = [];
tarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener("click", () => {
    modal.style.display = "flex";
    console.dir(tarjeta);
    let texto_interno = tarjeta.innerText;
    switch (texto_interno) {
      case "Red Tejida":
        /* cambiarH1(texto_interno); */
        arrRutaImg = ["redTejida3.jpg", "tejida.jpg"];
        contenidoModal(
          texto_interno,
          arrRutaImg,
          objTextos.texto1,
          matrizLista[0]
        );
        break;
      case "Red Extruida":
        /* cambiarH1(texto_interno); */
        arrRutaImg = ["redExtruida2.jpg", "redExtruida3.jpg"];
        contenidoModal(
          texto_interno,
          arrRutaImg,
          objTextos.texto2,
          matrizLista[1]
        );
        break;
      case "Red Protectora":
        /* cambiarH1(texto_interno); */
        arrRutaImg = ["redProtectora3.jpg", "redProtectora2.png"];
        contenidoModal(
          texto_interno,
          arrRutaImg,
          objTextos.texto3,
          matrizLista[2]
        );
        break;
      case "Red para Ajo":
        /* cambiarH1(texto_interno); */
        arrRutaImg = ["RedParaAjo1.jpg", "RedParaAjo3.jpg"];
        contenidoModal(
          texto_interno,
          arrRutaImg,
          objTextos.texto4,
          matrizLista[3]
        );
        break;
      case "Precintos":
        /* cambiarH1(texto_interno); */
        arrRutaImg = ["precintos2.jpg", "precintos3.jpg"];
        contenidoModal(
          texto_interno,
          arrRutaImg,
          objTextos.texto5,
          matrizLista[4]
        );
        break;
      case "Esponja SPA":
        /* cambiarH1(texto_interno); */
        arrRutaImg = ["esponja2.jpg", "esponja3.jpg"];
        contenidoModal(
          texto_interno,
          arrRutaImg,
          objTextos.texto6,
          matrizLista[5]
        );
        break;
    }
  });
});

btn_cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

/* function cambiarH1(texto) {
  document.querySelector("#imagenes").childNodes[3].innerText = texto;
} */

//=============================================================

function contenidoModal(titulo, arrImg, texto, arrLi) {
  let h1 = document.querySelector("#imagenes").childNodes[3];
  let imagenes = document.querySelectorAll(".img_modal");
  let p = document.querySelector("#texto").childNodes[1];
  let li = document.querySelector("#texto").childNodes[7].children;

  console.log(li[0]);
  console.log(arrLi);
  h1.innerText = titulo;
  imagenes.forEach((imagen, i) => {
    imagen.src = `img/${arrImg[i]}`;
  });
  p.innerText = texto;
  let i = 0;
  for (elemento of li) {
    elemento.innerText = arrLi[i];
    i++;
  }
}

const objTextos = {
  texto1:
    "Red Polietileno tejida es la solucion eficaz para fraccionamiento de frutas, verduras y frutos secos permite a los consumidores apreciar la calidad del producto sin general condensacion, gracias a su ventilaciòn. ideales tambien para fiambres, carnes, quesos, hongos y juguetes. Proteje la envoltura, el etiquetado publicitario, mejora la exposicion y el orden en sus gondolas. Se puede cerrar con un simple nudo, con grapadoras manuales, con precintos, ext . Consúltanos y te ofreceremos la mejor opción de cerrado para ti.",
  texto2:
    "Mallas extruídas para envasar verduras, frutas, juguetes y carnes. Este tipo de Red tubular es adecuado para empacar productor de hasta 5 kg. de peso por metro lineal, gracias a la calidad de nuestras mallas es la solucion eficaz y económica para el transporte y exhibicion de sus articulos. puede ser utilizada como bolsas de frutas y verduras reulizables ya que con su resistencia, permite que el envase retenga su forma desde el momento de envasado hasta su posterior uso. Ofrecemos una gran variedad de colores, gramajes, anchos y tipos de trama para adaptarnos a las necesidades específicas de cada cliente y cada producto. Se puede cerrar con un simple nudo, con grapadoras manuales, con máquinas para cerrado de mallas tubulareso, o nuestros broches.",
  texto3:
    "Red protectora es una malla tubular eslatizada, que garantiza la proteccion del producto de golpes, y rayaduras. Su elasticidad le permite tomar forma del mismo, se ajusta a la pieza sin necesidad de adhesivos, ni nungun material extra.",
  texto4:
    "Mallas extruidas orientadas para el envasado de ajos, ya sea para la confeccion en linea o agrupada. Destacada por la eslasticidad combinada con su resistencia permite que el envase retenga se forma desde el momento del envasado hasta su posterior uso. En sus colores violeta y blanco ayuda a mejorar la presentación y hacerlos más atractivos para sus clientes.",
  texto5:
    "Broche campana o precintos plasticos es utilizado para bolsas tipo red, ideal para empacar y promocionar juguetes, articulos deportivos, playa, dulce,velas, frutas o verduras. ect.El precinto para red es ideal para colgar en exhibidores o góndolas.El precinto para bolsas o boches para bolsas esta compuesto de 2 piezas : un lazo ovalado y una campana de cierre. El mismo permite cerrar y volver abrir las bolsas de red sin provocar ningun tipo de daño, es reutilizable gracias a su resistencia y su sensilla composición.",
  texto6:
    "Esponja Exfoliante ideal para todo el cuerpo, su efecto exfoliante permite la eliminación de células muertas , revitaliza la piel y son destacados por que estimula la circulacion sanguinea, generando un efecto energizante durante el baño.Son el complemento ideal de los jabones líquidos pues generan una espuma abundante.Su venta es unicamente por mayor.",
};

const matrizLista = [
  [
    "Facilita e incentiva la compra en el exhibidor",
    "Duradero, económico y no tóxico.",
    "Mantiene fresco su producto",
  ],
  [
    "Mejor ventilación y exposición de su producto en la góndola, verdulería, juguetería y delicatessen.",
    "Indispensable para el correcto transporte de fruta o verdura, carnes o cualquier tipo de producto no alimentario.",
    "disponible en : rojo, verde, amarrillo y azul",
  ],
  [
    "Eliminación de los problemas causados ​​por el roce.Embalaje universal y versátil.",
    "Reutilizables",
    "totalmente reciclables.",
  ],
  [
    "Colores : blanco y violeta",
    "Duradero, económico y no tóxico.",
    "Rendimiento 100 m x kg de malla.",
  ],
  [
    "viene en bolsas de 1000 boches",
    "tenemos en color rojo y blanco",
    "son recistentes y economicos",
  ],
];

console.log(objTextos.texto1, "espacio", matrizLista[0]);
