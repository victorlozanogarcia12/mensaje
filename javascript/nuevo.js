function iniciar(){
    bloque.style.display="none";
    añadirAsunto.addEventListener("click",verAsunto);
    botonQuitar.addEventListener("click",quitarAsunto);
}

function quitarAsunto(){
    bloque.style.display="none";
}

function verAsunto(){
    bloque.style.display="block";
}



window.addEventListener("load",iniciar);