/*
Está página permitirá:

• Insertar nuevos empleados en la tabla.
    Deberá crear la función javascriptcorrespondiente que permita insertar nuevos empleados.
    En el caso de insertarun nuevo empleado deberá actualizarse el número total de empleados.
    En elcaso de ya existir el empleado deberá mostrarse una alerta indicando que yaexiste el empleado.
    El DNI será el identificador del empleado.

• Borrar un empleado de la tabla.
    Deberá crear la función javascriptcorrespondiente que permita borrar un empleado.
    Para borrar un empleadodeberá introducirse el DNI del empleado que se desea borrar.
    En el caso deborrar un empleado deberá actualizarse el número total de empleados.
    En elcaso de que no exista el empleado deberá mostrarse una alerta.
    
• Modificar un empleado de la tabla.
    Deberá crear la función javascriptcorrespondiente.
    En el caso de que no exista el empleado a modificar deberámostrar una alerta indicando que el empleado a modificar no existe.
*/

const numEmp = document.getElementById("num-emp");
const tabla = document.getElementById("tabla-emp");

let totalEmpleados = tabla.rows.length - 1;
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

    let celdaNom = document.createElement("td");
    fila.appendChild(celdaNom);

    let celdaApe = document.createElement("td");
    fila.appendChild(celdaApe);


    //se piden los datos
    let posEmp = totalEmpleados + 1;
    console.log(posEmp);

    let dni = prompt("DNI del empleado:");
    console.log(dni);

    let nombre = prompt("Nombre del empleado:");
    console.log(nombre);
    if (empleadoExiste(nombre)) {
        alert("el empleado ya existe");
    } //else {
    //    alert("el empleado NO existe");
    //}

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
    let empleados = document.getElementsByTagName("td");
    let resul = 0;
    let encontrado = false;

    for (let i = 0; i < empleados.length && encontrado != true; i++) {

        if (emp == empleados[i].innerText) {
            resul = 1;
            encontrado = true;
        }

        // console.log(empleados[i].innerText);
    }

}