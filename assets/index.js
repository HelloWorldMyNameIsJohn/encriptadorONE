function encriptar() {
  let image = document.getElementById("output")
  let input = document.getElementById("input").value;
  let array = input.toLowerCase().split("");
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "a":
        array[i] = "7u7";
        break;
      case "e":
        array[i] = "uwu";
        break;
      case "i":
        array[i] = "naco";
        break;
      case "o":
        array[i] = "yei";
        break;
      case "u":
        array[i] = "brrrr";
        break;
    }
  }

  image.style.backgroundImage = 'none'

  let output = array.join("");
  document.getElementById("output").value = output;
  console.log(output)

  document.getElementById("copiar").style.visibility = "visible";

}

function desencriptar() {
  const input = document.getElementById("input").value;
  const output = input
    .replace(/7u7/g, "a")
    .replace(/uwu/g, "e")
    .replace(/naco/g, "i")
    .replace(/yei/g, "o")
    .replace(/brrrr/g, "u");

  const image = document.getElementById("output");
  image.style.backgroundImage = "none";

  document.getElementById("output").value = output;
  document.getElementById("copiar").style.visibility = "visible";
}

const clickCopiar = document.getElementById("copiar");
clickCopiar.addEventListener('click',function(e){
  e.preventDefault();
  copiar();
});

function copiar(e) {
  let input = document.getElementById("input");
  let copiado = document.getElementById("output");
  navigator.clipboard.writeText(copiado.value);

  alert("Texto Copiado");
  copiado.style.backgroundImage = "url('assets/images/Muneco.png')"
  copiado.value = "";
  input.value = "";
  document.getElementById("copiar").style.visibility = "hidden";
}
