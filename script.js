const texArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")


/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncriptar(){
    const textoEncriptado = encriptar(texArea.value)
    mensaje.value = textoEncriptado
    texArea.value = "";
    mensaje.style.backgroundimage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["o", "over"], ["a", "ai"], ["u", "ufat"]];
stringEncriptada = stringEncriptada.toLowerCase()

for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
}
return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desEncriptar(texArea.value)
    mensaje.value = textoEncriptado
    texArea.value = "";
}

function desEncriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["o", "over"], ["a", "ai"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
}
return stringDesencriptada
}



function textoCopiado(){
	navigator.clipboard.writeText(document.getElementById("mensajes").value);
	alert("El mensaje ha sido copiado");
}
