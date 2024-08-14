
class Producto {
    constructor(id, nombre, marca, precio) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }

    
    mostrarInfo() {
        return `${this.nombre} (${this.marca}) - $${this.precio}`;
    }
}

const productos = [
    new Producto(1, 'Cerveza', 'Quilmes', 2000),
    new Producto(2, 'Vino', 'Norton', 1500),
    new Producto(3, 'Vodka', 'Smirnoff', 8000),
    new Producto(4, 'Fernet', 'Branca', 7000),
    new Producto(5, 'Speed', 'Speed Unlimited', 1300),
    new Producto(6, 'Coca-Cola', 'Coca-Cola', 2000),
];

let carrito = [];

function mostrarProducto() {
    console.log("Productos disponibles:");
    productos.forEach(producto => {
        console.log(producto.mostrarInfo());
    });
}

function agregarAlCarrito() {
    let productoEncontrado = false;
    while (!productoEncontrado) {
        let nombreProducto = prompt("Ingrese el nombre del producto que desea agregar al carrito:").toLowerCase();
        let producto = productos.find(p => p.nombre.toLowerCase() === nombreProducto);

        if (producto) {
            let cantidad = parseInt(prompt(`¿Cuántas unidades de ${producto.nombre} (${producto.marca}) desea agregar? (Déjelo en blanco para agregar 1)`), 10);
            if (isNaN(cantidad) || cantidad <= 0) {
                cantidad = 1;
            }
            for (let i = 0; i < cantidad; i++) {
                carrito.push(producto);
            }
            console.log(`${cantidad} unidad(es) de ${producto.nombre} (${producto.marca}) ha(n) sido agregada(s) al carrito.`);
            productoEncontrado = true;
        } else {
            console.log("Producto no encontrado. Intente nuevamente.");
        }
    }
}

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
