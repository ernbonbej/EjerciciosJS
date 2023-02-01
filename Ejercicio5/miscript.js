const letrasArray = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

numDNI = prompt("Introduce tu número de DNI")

if (numDNI < 0 || numDNI > 99999999) {
    alert("El número proporcionado no es válido");    
} else {
    miLetra = letrasArray[numDNI%23]
    alert(`La letra es: ${miLetra}`)
}





