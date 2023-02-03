const numArray = [1,2,3,4,5,6,7,8,9];

function sumarPares() {
    var miSuma=0
    for (const numero of numArray) {
        if(numero%2==0) {
            miSuma=miSuma+numero            
        }
    }
    console.log('Suma de números pares:',miSuma)
}

sumarPares(numArray)
