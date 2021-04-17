class Empleado {
  constructor(legajo, apellido, nombre, puesto) {
    this.legajo = legajo;
    this.apellido = apellido.toLowerCase();
    this.nombre = nombre.toLowerCase();
    this.puesto = puesto.toLowerCase();
  }

  saludoEmpleado() {
    console.log(
      `Hola! soy ${this.nombre} y soy feliz cumpliendo el rol de ${this.puesto}`
    );
  }
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
let detalleDeVenta = [];
let detalleFactura = [];
let facturaVenta = [];

// permite cargar nuevas ventas
const altaVenta = () => {
  let resp;

  let numFactura = parseInt(prompt("Ingrese el numero de factura: "));
  let fechaFactura = prompt("ingrese la fecha de hoy: ");
  let datosCliente = prompt("ingrese los datos del cliente:");
  let datosVendedor = prompt("ingrese el nombre del vendedor");

  detalleDeVenta = new newVenta(
    numFactura,
    fechaFactura,
    datosCliente,
    datosVendedor
  );

  do {
    let detalleArticulo = prompt("ingrese el producto:");
    let detallePrecioUnitario = parseInt(
      prompt("ingrese el precion unitario:")
    );
    let detalleCantidadArticulo = parseInt(
      prompt("ingrese la cantidad vendida del articulo:")
    );

    const detalle = new newDetalle(
      detalleArticulo,
      detallePrecioUnitario,
      detalleCantidadArticulo
    );
    detalleFactura.push(detalle);

    resp = prompt("desea agregar otro producto a la factura? si o no:");
  } while (resp === "si");

  facturaVenta.push(detalleDeVenta, detalleFactura);

  listadoDeVentas.push(facturaVenta);
};

// permite cargar nuevos empleados
const altaEmpleado = () => {
  let legajo = parseInt(prompt("Ingrese el legajo del nuevo empleado: "));
  let apellido = prompt("Ingrese el apellido del nuevo empleado: ");
  let nombre = prompt("Ingrese el nombre del nuevo empleado: ");
  let puesto = prompt("Ingrese el puesto del nuevo empleado: ");

  const empleado = new Empleado(legajo, apellido, nombre, puesto);

  empleado.saludoEmpleado();

  listaDeEmpleados.push(empleado);
};

// permite listar los empleados previamente cargados
const listarEmpleados = () => {
  console.log("Estos son los empleados en plantilla:");
  listaDeEmpleados.forEach((empleado) => {
    console.log(empleado);
  });
};

// funcion que sirve para buscar empleados por legajo
const hallaEmpleado = (buscaEmpleado) => {
  const empleado = listaDeEmpleados.find(
    (empleado) => empleado.legajo === buscaEmpleado
  );
  return empleado;
};

// permite eliminar un empleado de la lista
const bajaEmpleado = () => {
  let buscaEmpleado = parseInt(prompt("ingrese el legajo del empleado"));

  let empleadoBuscado = hallaEmpleado(buscaEmpleado);
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

// actualizar datos de empleados
const modEmpleado = () => {};
