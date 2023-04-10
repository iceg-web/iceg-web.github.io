const cambiarFondoBtn = document.getElementById("cambiar-fondo");
const cambiarFondoVinculos = document.getElementById("vinculos");
const cambiarVinculoA = document.getElementById("a");
const cambiarVinculoB = document.getElementById("b");
const cambiarVinculoC = document.getElementById("c");
const body = document.querySelector("body");

      cambiarFondoBtn.addEventListener("click", () => {
        if (body.style.backgroundColor === "black") {
          body.style.backgroundColor = "white";
          body.style.color = "black";
          cambiarFondoBtn.style.backgroundColor = "Transparent";
          cambiarFondoBtn.style.color = "black";
          cambiarFondoVinculos.style.backgroundColor = "white";
          cambiarVinculoA.style.color = "black";
          cambiarVinculoB.style.color = "black";
          cambiarVinculoC.style.color = "black";
        } else {
          body.style.backgroundColor = "black";
          body.style.color = "white";
          cambiarFondoBtn.style.backgroundColor = "Transparent";
          cambiarFondoBtn.style.color = "white";
          cambiarFondoVinculos.style.backgroundColor = "black";
          cambiarVinculoA.style.color = "white";
          cambiarVinculoB.style.color = "white";
          cambiarVinculoC.style.color = "white";
        }
      });