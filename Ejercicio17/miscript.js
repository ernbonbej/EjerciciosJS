const enlaces = document.getElementsByTagName('a')

numEnlaces = enlaces.length

const direccion = enlaces[numEnlaces-2]


alert(`- La página tiene ${numEnlaces} enlaces\n- El penúltimo enlace dirige a: ${direccion}\n- El tercer párrafo tiene X enlaces`)