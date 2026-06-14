// ===============================
// MODO LIMPIO MANAGER
// Versión 1.0
// ===============================

console.log("Modo Limpio Manager iniciado");

// Datos temporales
let clientes = [];
let productos = [];
let ventas = [];

// Agregar cliente
function agregarCliente(nombre, telefono, direccion){

    clientes.push({
        nombre,
        telefono,
        direccion
    });

    console.log("Cliente agregado");
}

// Agregar producto
function agregarProducto(nombre,categoria,costo,venta,stock){

    productos.push({
        nombre,
        categoria,
        costo,
        venta,
        stock
    });

    console.log("Producto agregado");
}

// Registrar venta
function registrarVenta(cliente,producto,cantidad,precio){

    let total = cantidad * precio;

    ventas.push({
        cliente,
        producto,
        cantidad,
        precio,
        total
    });

    console.log("Venta registrada");

    return total;

}

// Calcular comisión
function calcularComision(total,porcentaje){

    return total * porcentaje / 100;

}

// Mostrar información
function resumenSistema(){

    console.log("Clientes:",clientes.length);
    console.log("Productos:",productos.length);
    console.log("Ventas:",ventas.length);

}
