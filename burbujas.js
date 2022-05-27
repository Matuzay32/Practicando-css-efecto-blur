var burbujas = document.getElementById("burbujas");

const creacionBurbuja = (
  burbujas,
  velocidad = 60,
  posicion = 90,
  coloresGrises = 255,
  tamaño = 5,
  cantidad = 1
) => {
  for (let index = 0; index < cantidad; index++) {
    const posicionBurbuja = Math.floor(Math.random() * posicion);
    const coloresOscuros = Math.floor(Math.random() * coloresGrises);
    const sizeBurbuja = Math.floor(Math.random() * tamaño);
    const velocidadBurbujas = 1 + Math.floor(Math.random() * velocidad);

    burbujas.innerHTML += `<div style="left:${posicionBurbuja}%;
    animation: burbujas ${velocidadBurbujas}s linear infinite ;
    background-color: rgb(${coloresOscuros}, ${coloresOscuros}, ${coloresOscuros},0.7);
    width:${sizeBurbuja}px;
    height:${sizeBurbuja}px;
    " class="burbuja"></div>`;
  }
};

creacionBurbuja(burbujas, 10, 100, 300, 30, 100);
