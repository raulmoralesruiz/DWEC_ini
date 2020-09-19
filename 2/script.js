/*
Está página permitirá:

• Insertar nuevos empleados en la tabla.
    Deberá crear la función javascript correspondiente que permita insertar nuevos empleados.
    En el caso de insertar un nuevo empleado deberá actualizarse el número total de empleados.
    En el caso de ya existir el empleado deberá mostrarse una alerta indicando que ya existe el empleado.
    El DNI será el identificador del empleado.

• Borrar un empleado de la tabla.
    Deberá crear la función javascript correspondiente que permita borrar un empleado.
    Para borrar un empleado deberá introducirse el DNI del empleado que se desea borrar.
    En el caso deborrar un empleado deberá actualizarse el número total de empleados.
    En el caso de que no exista el empleado deberá mostrarse una alerta.

• Modificar un empleado de la tabla.
    Deberá crear la función javascript correspondiente.
    En el caso de que no exista el empleado a modificar deberá mostrar una alerta indicando que el empleado a modificar no existe.
*/



//ubicación de línea que muestra el número de empleados
const numEmp = document.getElementById("num-emp");

//tabla que almacena todos los datos
const tabla = document.getElementById("tabla-emp");

//se obtiene el número de empleados (número total de filas - 1)
let totalEmpleados = tabla.rows.length - 1;

//se actualiza la línea anterior con el número actual de empleados
numEmp.innerText = "Número total de empleados: " + totalEmpleados;


function insertar() {
    let totalEmpleados = tabla.rows.length - 1;
    console.log(totalEmpleados);
    
    //se crea la fila del nuevo empleado
    let fila = document.createElement("tr");
    tabla.appendChild(fila);

    //se crean las celdas para cada campo
    let celdaNum = document.createElement("td");
    fila.appendChild(celdaNum);

    let celdaDNI = document.createElement("td");
    fila.appendChild(celdaDNI);
    celdaDNI.classList.add("dniEmp");

    let celdaNom = document.createElement("td");
    fila.appendChild(celdaNom);

    let celdaApe = document.createElement("td");
    fila.appendChild(celdaApe);



    //se piden los datos
    let posEmp = totalEmpleados + 1;
    console.log(posEmp);


    let dni = prompt("DNI del empleado:");
    console.log(dni);

    //mientras el dni exista, se volverá a pedir (hasta que no exista).
    while (empleadoExiste(dni) == true) {
        dni = prompt("El empleado ya existe, introduce otro dni.");
    }


    let nombre = prompt("Nombre del empleado:");
    console.log(nombre);


    let ape = prompt("Apellidos del empleado:");
    console.log(ape);



    // se incluyen los datos en cada celda
    celdaNum.innerText = posEmp;
    celdaDNI.innerText = dni;
    celdaNom.innerText = nombre;
    celdaApe.innerText = ape;

    numEmp.innerText = "Número total de empleados: " + (totalEmpleados + 1);
}


function modificar() {
}



function empleadoExiste(emp) {
    //guarda todos las celdas con clase dniEmp en la variable empleados
    let empleados = document.getElementsByClassName("dniEmp");

    let encontrado = false;

    //buscamos si el empleado existe (cualquier celda de la tabla)
    for (let i = 0; i < empleados.length && encontrado != true; i++) {
        if (emp == empleados[i].textContent) {
            encontrado = true;
        }
    }

    return encontrado;
}
