const text_ruta = document.getElementById("text_ruta");


const text_ruta2 = document.getElementById("text_ruta2");


var svar = document.querySelector("#svar_ruta");

function plus() {
    let variabel1 = text_ruta.value;
    const intvariabel1 = parseInt(variabel1);
    let variabel2 = text_ruta2.value;
    const intvariabel2 = parseInt(variabel2);
    
    svar.value = intvariabel1 + intvariabel2
}

function minus() {
    let variabel1 = text_ruta.value;
    const intvariabel1 = parseInt(variabel1);
    let variabel2 = text_ruta2.value;
    const intvariabel2 = parseInt(variabel2);

    svar.value = intvariabel1 - intvariabel2
}

function multiplicera() {
    let variabel1 = text_ruta.value;
    const intvariabel1 = parseInt(variabel1);
    let variabel2 = text_ruta2.value;
    const intvariabel2 = parseInt(variabel2);

    svar.value = intvariabel1 * intvariabel2
}

function dividera() {
    let variabel1 = text_ruta.value;
    const intvariabel1 = parseInt(variabel1);
    let variabel2 = text_ruta2.value;
    const intvariabel2 = parseInt(variabel2);

    svar.value = intvariabel1 / intvariabel2
}
