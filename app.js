let textInput = document.querySelector("#input");
let output = document.querySelector("#output");


function encrypt(){

  let text = textInput.value;

  let resultEncrypt = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  document.getElementById('output').innerHTML = '<textarea readonly id="text-output">' + resultEncrypt + 
  '</textarea>' + '<button class="container-copy-button" id="copy-button" onclick="copy()">Copiar</button>'
}

function decrypt(){

    var text = textInput.value;

    var resultDecrypt = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="text-output">' + resultDecrypt + 
    '</textarea>' + '<button class="container-copy-button" onclick="copy()" id="copy-button">Copiar</button>'
}

async function copy() {
  let textToClipboard = document.getElementById("text-output").value; // Use .value para <textarea>
  
  await navigator.clipboard.writeText(textToClipboard);
}