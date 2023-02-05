const enlaces = document.getElementsByTagName('a');

numEnlaces = enlaces.length;

const direccion = enlaces[numEnlaces-2];

const parrafo3 = document.getElementById('third-paragraph');

numEnl = parrafo3.getElementsByTagName('a').length;

alert(`- La página tiene ${numEnlaces} enlaces\n- El penúltimo enlace dirige a: ${direccion}\n- El tercer párrafo tiene ${numEnl} enlaces`);

const nuevoParrafo = document.createElement("p");
nuevoParrafo.innerHTML = `La página tiene ${numEnlaces} enlaces, el penúltimo enlace dirige a: ${direccion} y el tercer párrafo tiene ${numEnl} enlaces`;
document.body.appendChild(nuevoParrafo);