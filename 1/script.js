let nombres = []; 
const maxNombres = 5;

function inicializar() {
    // let cont = 0;

    //pedir los 5 nombres
    for (let cont = 0; cont < maxNombres; cont++) {
        nombres[cont] = prompt("introduce nombre");

        // if (existeNombre(nombres[cont]) == 1) {
        //     nombres[cont] = prompt("introduce nombre");
        // }

        // while (existeNombre(nombres[cont]) != 1) {
        //     nombres[cont] = prompt("introduce nombre");
        // }
    }


    //imprimir el array de nombres
    for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i]);
    }

}

function existeNombre(name) {
    let resul = 0;

    for (let i = 0; i < nombres.length; i++) {
        if (name == nombres[i]) {
            resul = 1;
        }
    }

    console.log("resul=" + resul);
    return resul;
}