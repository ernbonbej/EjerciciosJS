const largoCubo = 23
const anchoCubo = 16
const altoCubo = 13

areaBase = largoCubo*anchoCubo
areaLateral1 = largoCubo*altoCubo
areaLateral2 = anchoCubo*altoCubo

volumenCubo = largoCubo*anchoCubo*altoCubo

console.log('Volumen:', volumenCubo,'cm3','\nÁrea:',2*areaBase+2*areaLateral1+2*areaLateral2, 'cm2')