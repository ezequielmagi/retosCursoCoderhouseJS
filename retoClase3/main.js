


function newEmpleado (legajo, apellido, nombre, puesto){
    this.legajo = legajo;
    this.apellido = apellido;
    this.nombre = nombre;
    this.puesto = puesto;
}

let listaDeEmpleados = []


const altaEmpleado = () =>{

    let legajo = prompt('Ingrese el legajo del nuevo empleado: ')
    let apellido = prompt('Ingrese el apellido del nuevo empleado: ')
    let nombre = prompt('Ingrese el nombre del nuevo empleado: ')
    let puesto = prompt('Ingrese el puesto del nuevo empleado: ')

    const empleado = new newEmpleado(legajo,apellido,nombre,puesto)

    listaDeEmpleados.push(empleado)
}


const listarEmpleados = () => {
    console.log('Estos son los empleados en plantilla:')
    for (i=0; i < listaDeEmpleados.length; i++){
        console.log(listaDeEmpleados[i])
    }
}

const bajaEmpleado = () => {

    let buscaEmpleado = parseInt(prompt("ingrese el legajo del empleado"));

    const hallaEmpleado = () => listaDeEmpleados.find((empleado) => empleado.legajo === buscaEmpleado);

    let empleadoBuscado = hallaEmpleado();

    console.log(`el empleado buscado es ${empleadoBuscado.nombre}`);


}

// let rajaEmpleado = parseInt(prompt("ingrese el legajo del empleado"));
//
// const hallaEmpleado = () => empleados.find((empleado) => empleado.legajo === rajaEmpleado);
//
// let hallado = hallaEmpleado();
//
// console.log(`el empleado buscado es ${hallado.nombre

const modEmpleado = () => {

}

