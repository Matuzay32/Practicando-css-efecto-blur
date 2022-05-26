var burbujas = document.getElementById("burbujas");
let coloresOscuros = Math.floor(Math.random() * 255);

for (let index = 0; index < 1000; index++) {
  console.log(index);
  burbujas.innerHTML += `<div style="left:${
    1 + Math.floor(Math.random() * 90)
  }%;
  animation: burbujas ${1 + Math.floor(Math.random() * 60)}s linear infinite ;
  background-color: rgb(${coloresOscuros}, ${coloresOscuros}, ${coloresOscuros},0.7);

  

  " class="burbuja"></div>`;
}
