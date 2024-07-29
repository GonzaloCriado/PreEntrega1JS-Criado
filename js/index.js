const productos = [
    { id: "Cerveza", nombre: 'Cerveza', precio: 2000 },
    { id: "Vino", nombre: 'Vino', precio: 1500 },
    { id: "Vodka", nombre: 'Vodka', precio: 8000 },
    { id: "Fernet", nombre: 'Fernet', precio: 7000 },
    { id: "Speed", nombre: 'Speed', precio: 1300 },
    { id: "Coca-Cola", nombre: 'Coca-Cola', precio: 2000 },
];

let carrito = [];

function mostrarProducto() {
    console.log("Productos disponibles:");
    productos.forEach(producto => {
        console.log(`${producto.nombre} - $${producto.precio}`);
    });
}

function agregarAlCarrito() {
    let productoEncontrado = false;
    while (!productoEncontrado) {
        let nombreProducto = prompt("Ingrese el nombre del producto que desea agregar al carrito:").toLowerCase();
        let producto = productos.find(p => p.nombre.toLowerCase() === nombreProducto);

        if (producto) {
            carrito.push(producto);
            console.log(`${producto.nombre} ha sido agregado al carrito.`);
            productoEncontrado = true;
        } else {
            console.log("Producto no encontrado. Intente nuevamente.");
        }
    }
} // <-- Aquí estaba el paréntesis de cierre que faltaba

function mostrarTotalCarrito() {
    let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    console.log(`Total del carrito: $${total}`);
}

function realizarCompra() {
    mostrarProducto();
    let continuar = true;

    while (continuar) {
        agregarAlCarrito();
        let respuestaValida = false;

        while (!respuestaValida) {
            let otraCompra = prompt("¿Desea agregar otro producto al carrito? (si/no)").toLowerCase();
            if (otraCompra === 'si') {
                continuar = true;
                respuestaValida = true;
            } else if (otraCompra === 'no') {
                continuar = false;
                respuestaValida = true;
            } else {
                console.log("Respuesta no válida, responda 'si' o 'no'.");
            }
        }
    }

    mostrarTotalCarrito();
}

realizarCompra();
