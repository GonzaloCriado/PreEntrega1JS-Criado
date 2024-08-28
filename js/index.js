class Producto {
    constructor(id, nombre, marca, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.imagen = imagen;
    }

    mostrarInfo() {
        return `${this.nombre} (${this.marca}) - $${this.precio}`;
    }
}

const productos = [
    new Producto(1, 'Cerveza', 'Quilmes', 2000, 'assets/images/.bebidas/quilmes.jpg'),
    new Producto(2, 'Vino', 'Norton', 1500, 'assets/images/.bebidas/viñasdebalbo.jpg'),
    new Producto(3, 'Vodka', 'Smirnoff', 8000, 'assets/images/.bebidas/skysavorizado.jpg'),
    new Producto(4, 'Fernet', 'Branca', 7000, 'assets/images/.bebidas/fernetbranca.jpg'),
    new Producto(5, 'Speed', 'Speed Unlimited', 1300, 'assets/images/.bebidas/speed XL.jpg'),
    new Producto(6, 'Coca-Cola', 'Coca-Cola', 2000, 'assets/images/.bebidas/cocacola2,25L.jpg'),
];

let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    actualizarCarrito();
});

function cargarProductos() {
    const productoGrid = document.querySelector('.producto-grid');
    productoGrid.innerHTML = '';

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto-card');
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <p>${producto.nombre}: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
        `;
        productoGrid.appendChild(productoDiv);
    });
}

function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}

function aumentarCantidadEnCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}

function quitarDelCarrito(productoId) {
    const index = carrito.findIndex(producto => producto.id === productoId);
    if (index !== -1) {
        carrito.splice(index, 1);
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalPrecio = document.getElementById('totalPrecio');

    listaCarrito.innerHTML = '';

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.classList.add('carrito-item');
        li.innerHTML = `${producto.nombre} (${producto.marca}) - $${producto.precio}
            <button onclick="quitarDelCarrito(${producto.id})">-</button>
            <button onclick="aumentarCantidadEnCarrito(${producto.id})">+</button>`;
        listaCarrito.appendChild(li);
    });

    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    totalPrecio.textContent = `Total: $${total}`;
}


