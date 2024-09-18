class Producto {
    constructor(id, nombre, marca, precio, categoria, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
    }

    mostrarInfo() {
        return `${this.nombre} (${this.marca}) - $${this.precio}`;
    }
}

// Simulación de productos disponibles
const productos = [
    new Producto(1, "Brio", "Brio", 1500, "Bebidas sin alcohol", "/assets/images/.bebidas/.bebidassinalcohol/brio.jpg"),
    new Producto(2, "Coca-cola 500ml", "coca-cola", 1200, "Bebidas sin alcohol", "/assets/images/.bebidas/.bebidassinalcohol/cocachica.jpg"),
    new Producto(3, "Aquarius 500ml", "Aquarius", 1000, "Bebidas sin alcohol", "/assets/images/.bebidas/.bebidassinalcohol/aquariuschica.jpg"),
    new Producto(4, "Levite 500ml", "Levite", 1000, "Bebidas sin alcohol", "/assets/images/.bebidas/.bebidassinalcohol/levitechica.jpg"),
    new Producto(5, "Pepsi", "Pepsi", 2500, "Bebidas sin alcohol", "/assets/images/.bebidas/.bebidassinalcohol/pepsigrande.jpg"),
    new Producto(6, "Pritty", "Pritty", 2000, "Bebidas sin alcohol", "/assets/images/.bebidas/.bebidassinalcohol/prittymediana.jpg"),
    new Producto(7, "Sprite", "Sprite", 2500, "Bebidas sin alcohol", "/assets/images/.bebidas/.bebidassinalcohol/sprite.jpg"),
    new Producto(8, "Coca-cola 2L", "Coca-Cola", 2800, "Bebidas sin alcohol", "/assets/images/.bebidas/.bebidassinalcohol/cocacola2,25L.jpg"),
    new Producto(9, "Soda", "Soda", 1800, "Bebidas sin alcohol", "/assets/images/.bebidas/.bebidassinalcohol/soda.jpg"),
    new Producto(10, "Gatorade", "Gatorade", 2800, "Bebidas sin alcohol", "/assets/images/.bebidas/.bebidassinalcohol/gatorade.jpg"),
    new Producto(11, "Andes", "Andes", 2500, "Cervezas", "/assets/images/.bebidas/.cervezas/andesbotella.jpg"),
    new Producto(12, "Andes rubia 500ml", "Andes", 1200, "Cervezas", "/assets/images/.bebidas/.cervezas/andesrubia.jpg"),
    new Producto(13, "Brahma dorada", "Brahma", 1200, "Cervezas", "/assets/images/.bebidas/.cervezas/brahmadorada.jpg"),
    new Producto(14, "Budweiser", "budweiser", 1200, "Cervezas", "/assets/images/.bebidas/.cervezas/budweiser.jpg"),
    new Producto(15, "Corona 500ml", "Corona", 1500, "Cervezas", "/assets/images/.bebidas/.cervezas/corona.jpg"),
    new Producto(16, "Iguana", "Iguana", 2000, "Cervezas", "/assets/images/.bebidas/.cervezas/iguanabotella.jpg"),
    new Producto(17, "Imperial", "Imperial", 2500, "Cervezas", "/assets/images/.bebidas/.cervezas/imperialbotella.jpg"),
    new Producto(18, "Quilmes", "Quilmes", 2200, "Cervezas", "/assets/images/.bebidas/.cervezas/quilmes.jpg"),
    new Producto(19, "Stella Artois", "stellaartois", 2000, "Cervezas", "/assets/images/.bebidas/.cervezas/stellaartois.jpg"),
    new Producto(20, "Corona", "corona", 3000, "Cervezas", "/assets/images/.bebidas/.cervezas/coronabotella.jpg"),
    new Producto(21, "Alaris", "Alaris", 4500, "Vinos Tintos", "/assets/images/.bebidas/.vinostintos/alaris.jpg"),
    new Producto(22, "Vino Toro", "vino toro", 800, "Vinos Tintos", "/assets/images/.bebidas/.vinostintos/vinotoro.jpg"),
    new Producto(23, "Cordero con piel de lobo", "Malbec", 5000, "Vinos Tintos", "/assets/images/.bebidas/.vinostintos/corderoconpieldelobo.jpg"),
    new Producto(24, "El gordo motoneta", "Malbec", 3000, "Vinos Tintos", "/assets/images/.bebidas/.vinostintos/elgordomotoneta.jpg"),
    new Producto(25, "Otro loco mas", "Malbec", 3000, "Vinos Tintos", "/assets/images/.bebidas/.vinostintos/otrolocomas.jpg"),
    new Producto(26, "Viñas de balbo", "Malbec", 2900, "Vinos Tintos", "/assets/images/.bebidas/.vinostintos/viñasdebalbo.jpg"),
    new Producto(27, "Baileys", "Jameson", 8000, "Whiskies", "/assets/images/.bebidas/.whiskys/baileys.jpg"),
    new Producto(28, "Ballantines", "Jameson", 9000, "Whiskies", "/assets/images/.bebidas/.whiskys/ballantines.jpg"),
    new Producto(29, "Black label", "Jameson", 12000, "Whiskies", "/assets/images/.bebidas/.whiskys/blacklabel.jpg"),
    new Producto(30, "Blenders pride", "Jameson", 10000, "Whiskies", "/assets/images/.bebidas/.whiskys/blenderspride.jpg"),
    new Producto(31, "Chivas regal", "Jameson", 10000, "Whiskies", "/assets/images/.bebidas/.whiskys/chivasregal.jpg"),
    new Producto(32, "Jameson", "Jameson", 11000, "Whiskies", "/assets/images/.bebidas/.whiskys/jameson.jpg"),
    new Producto(33, "Red label", "Jameson", 12000, "Whiskies", "/assets/images/.bebidas/.whiskys/redlabel.jpg"),
    new Producto(34, "White horse", "Jameson", 10000, "Whiskies", "/assets/images/.bebidas/.whiskys/whitehorse.jpg"),
    new Producto(35, "Absolut", "vodka", 13000, "Vodka", "/assets/images/.bebidas/vodkas/absolut.jpg"),
    new Producto(36, "Dr.lemon", "vodka", 2500, "Vodka", "assets/images/.bebidas/vodkas/dr.lemon.jpg"),
    new Producto(37, "Frizze", "vodka", 2500, "Vodka", "assets/images/.bebidas/vodkas/frizze.jpg"),
    new Producto(38, "Sernova", "vodka", 6000, "Vodka", "assets/images/.bebidas/vodkas/sernova.jpg"),
    new Producto(39, "Sky Frutos rojos", "vodka", 10000, "Vodka", "assets/images/.bebidas/vodkas/skyfrutosrojos.jpg"),
    new Producto(40, "Sky mango", "vodka", 10000, "Vodka", "assets/images/.bebidas/vodkas/skysavorizado.jpg"),
    new Producto(41, "Smirnoff", "vodka", 8000, "Vodka", "assets/images/.bebidas/vodkas/smirnoff.jpg"),
    new Producto(42, "Speed XL", "speed", 1500, "Energizantes", "/assets/images/.bebidas/.energizantes/speed XL.jpg"),
    new Producto(43, "Red bull", "Red Bull", 1200, "Energizantes", "/assets/images/.bebidas/.energizantes/redbull.jpg"),
    new Producto(44, "Monster", "Monster", 1300 , "Energizantes", "/assets/images/.bebidas/.energizantes/monster.jpg"),
    new Producto(45, "Fernet branca", "Fernet", 10000, "Aperitivos", "/assets/images/.bebidas/.aperitivos/fernetbranca.jpg"),
    new Producto(46, "Carpano rosso", "Carpano", 8000, "Aperitivos", "/assets/images/.bebidas/.aperitivos/carpanorosso.jpg"),
    new Producto(47, "Fernet branca menta", "Fernet", 9000, "Aperitivos", "/assets/images/.bebidas/.aperitivos/brancamenta.jpg"),
    new Producto(48, "Hielo", "Kilos", 150, "Hielo", "/assets/images/.bebidas/.hielo/bolsadehielo.jpg")
];

const categorias = [...new Set(productos.map(p => p.categoria))]; // Categorías únicas
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    cargarCategorias();
    actualizarCarrito();
});

function cargarCategorias() {
    const categoriaGrid = document.getElementById('categoriaGrid');
    categoriaGrid.innerHTML = '';

    categorias.forEach(categoria => {
        const categoriaDiv = document.createElement('div');
        categoriaDiv.classList.add('categoria-card');
        categoriaDiv.textContent = categoria;
        categoriaDiv.onclick = () => mostrarProductosPorCategoria(categoria);
        categoriaGrid.appendChild(categoriaDiv);
    });
}

function mostrarProductosPorCategoria(categoria) {
    const productoGrid = document.getElementById('categoriaGrid');
    productoGrid.innerHTML = '';
    const productosFiltrados = productos.filter(producto => producto.categoria === categoria);

    productosFiltrados.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto-card');
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <p>${producto.nombre}: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
        `;
        productoGrid.appendChild(productoDiv);
    });

    const botonVolver = document.createElement('button');
    botonVolver.classList.add('btn', 'btn-secondary');
    botonVolver.textContent = 'Volver a Categorías';
    botonVolver.onclick = volverACategorias;
    productoGrid.appendChild(botonVolver);
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalPrecio = document.getElementById('totalPrecio');
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
        const item = document.createElement('li');
        item.classList.add('carrito-item');
        item.innerHTML = `
            ${producto.nombre} - $${producto.precio}
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        listaCarrito.appendChild(item);
        total += producto.precio;
    });

    totalPrecio.textContent = `Total: $${total}`;
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function volverACategorias() {
    const productoGrid = document.getElementById('categoriaGrid');
    productoGrid.innerHTML = '';
    cargarCategorias();
}
