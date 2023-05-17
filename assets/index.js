function encriptar() {
  let image = document.getElementById("output")
  let input = document.getElementById("input").value;
  let array = input.toLowerCase().split("");
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "a":
        array[i] = "ai";
        break;
      case "e":
        array[i] = "enter";
        break;
      case "i":
        array[i] = "imes";
        break;
      case "o":
        array[i] = "ober";
        break;
      case "u":
        array[i] = "ufat";
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
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

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
