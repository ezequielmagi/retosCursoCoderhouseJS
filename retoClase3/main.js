function newEmpleado(legajo, apellido, nombre, puesto) {
  this.legajo = legajo;
  this.apellido = apellido;
  this.nombre = nombre;
  this.puesto = puesto;
}

function newVenta(factura, fecha, cliente, vendedor, detalle) {
  this.factura = factura;
  this.fecha = fecha;
  this.cliente = cliente;
  this.vendedor = vendedor;
  this.detalle = detalle;
}
function newDetalle(articulo, precio, cantidad) {
  this.articulo = articulo;
  this.precio = precio;
  this.cantidad = cantidad;
}

let listadoDeVentas = [];
let listaDeEmpleados = [];
let detalleFactura = [];
const altaVenta = () => {
  let numFactura = parseInt(prompt("Ingrese el numero de factura: "));
  let fechaFactura = prompt("ingrese la fecha de hoy: ");
  let datosCliente = prompt("ingrese los datos del cliente:");
  let datosVendedor = prompt("ingrese el nombre del vendedor");

  do {
    let detalleArticulo = prompt("ingrese el producto:");
    let detallePrecioUnitario = parseInt(
      prompt("ingrese el precion unitario:")
    );
    let detalleCantidadArticulo = parseInt(
      prompt("ingrese la cantidad vendida del articulo:")
    );

    let detalle = new newDetalle(
      detalleArticulo,
      detallePrecioUnitario,
      detalleCantidadArticulo
    );
    detalleFactura.push(detalle);
    prompt("desea agregar otro producto a la factura? si o no:");
  } while (resp === "no");
};

const altaEmpleado = () => {
  let legajo = parseInt(prompt("Ingrese el legajo del nuevo empleado: "));
  let apellido = prompt("Ingrese el apellido del nuevo empleado: ");
  let nombre = prompt("Ingrese el nombre del nuevo empleado: ");
  let puesto = prompt("Ingrese el puesto del nuevo empleado: ");

  const empleado = new newEmpleado(legajo, apellido, nombre, puesto);

  listaDeEmpleados.push(empleado);
};

const listarEmpleados = () => {
  console.log("Estos son los empleados en plantilla:");
  for (i = 0; i < listaDeEmpleados.length; i++) {
    let plantilla = listaDeEmpleados[i];
    console.log(plantilla);
  }
};

const bajaEmpleado = () => {
  let buscaEmpleado = parseInt(prompt("ingrese el legajo del empleado"));

  const hallaEmpleado = () =>
    listaDeEmpleados.find((empleado) => empleado.legajo === buscaEmpleado);

  let empleadoBuscado = hallaEmpleado();
  let nombreParaMostrar =
    empleadoBuscado.apellido + " " + empleadoBuscado.nombre;
  let resp = prompt(
    `seguro desea eliminar a ${nombreParaMostrar}? Esta accion no se puede deshacer:`
  );
  if (resp === "si") {
    listaDeEmpleados.splice(listaDeEmpleados.indexOf(empleadoBuscado), 1);

    console.log(`se ha eliminado con exito el empleado`);
  } else {
    console.log("la operacion se ha cancelado");
  }
};

const modEmpleado = () => {};
