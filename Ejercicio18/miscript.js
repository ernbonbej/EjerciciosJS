document.getElementById("miBtn").addEventListener("click",mostrarAlerta)
document.getElementById("miTxt1").addEventListener("focus",cambiarFondo1)
document.getElementById("miTxt1").addEventListener("blur",cambiarFondo2)
document.getElementById("miTxt2").addEventListener("input",cambiaTexto)

function mostrarAlerta() {
    alert("Guardado")
}

function cambiarFondo1() {
    document.getElementById("miTxt1").style.background = 'Blue'
}

function cambiarFondo2() {
    document.getElementById("miTxt1").style.background = 'Red'
}

function cambiaTexto() {
    const vocales = ['a','e','i','o','u']
    miLetra = document.getElementById("miTxt2").value
    
    if (vocales.includes(miLetra)) {
        document.getElementById("miTxt2").style.color = "Red"
    } else {
        document.getElementById("miTxt2").style.color = "Blue"
    }   
}