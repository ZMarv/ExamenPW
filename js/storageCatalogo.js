const productos = [
    //Grupo1
    {
        codigo: 1,
        nombre: "Macetero",
        precio: 7990,
        imagen: "img/productos/macetero1.png",
        cantidad: 1
    },
    {
        codigo: 2,
        nombre: "Lilium Blanco",
        precio: 6990,
        imagen: "img/productos/Lilium.jpg",
        cantidad: 1
    },
    {
        codigo: 3,
        nombre: "Diamelo Arbusto",
        precio: 12990,
        imagen: "img/productos/Diamelo.jpg",
        cantidad: 1
    },
    {
        codigo: 4,
        nombre: "Set de Herramientas",
        precio: 12990,
        imagen: "img/productos/setHerramientas1.jpg",
        cantidad: 1
    },
    {
        codigo: 5,
        nombre: "Tierra de Hojas 40 Litros",
        precio: 6350,
        imagen: "img/productos/TierraDeHojas2_40.jpg",
        cantidad: 1
    },
    
    //Grupo2
    {
        codigo: 6,
        nombre: "Manguera Reforzada 20m",
        precio: 18490,
        imagen: "img/productos/manguera2.jpg",
        cantidad: 1
    },
    {
        codigo: 7,
        nombre: "Macetero Colgante Autorregante",
        precio: 8690,
        imagen: "img/productos/maceteroColgante3.jpg",
        cantidad: 1
    },
    {
        codigo: 8,
        nombre: "Tijeras de Podar",
        precio: 13990,
        imagen: "img/productos/tijerasPodar1.jpg",
        cantidad: 1
    },
    {
        codigo: 9,
        nombre: "Cala Naranja",
        precio: 10500,
        imagen: "img/productos/calaNaranja.jpg",
        cantidad: 1
    },
    {
        codigo: 10,
        nombre: "Ficus Bonsai Verde",
        precio: 7890,
        imagen: "img/productos/ficusBonsaiVerde.jpg",
        cantidad: 1
    },
    //Grupo3
    {
        codigo: 11,
        nombre: "Peperomia Cucharita",
        precio: 7990,
        imagen: "img/productos/peperomiaCucharita.jpg",
        cantidad: 1
    },
    {
        codigo: 12,
        nombre: "Allium Tuberosum",
        precio: 8990,
        imagen: "img/productos/AlliumTuberosum.jpg",
        cantidad: 1
    }/*,
    
    {
        codigo: "013",
        nombre: "Tierra de Hojas Reforzada 8 L",
        precio: 2100,
        imagen: "img/productos/TierraDeHojas_8.jpg"
    },
    {
        codigo: "014",
        nombre: "Tierra para Maceteros 25 L",
        precio: 7250,
        imagen: "img/productos/tierraMaceteros.jpg"
    },
    {
        codigo: "015",
        nombre: "Nardo",
        precio: 9600,
        imagen: "img/productos/nardo.jpg"
    }*/
];

/*
const catalogoProductos = document.querySelector("#cardProducto");

function cargarProductos(){
   productos.forEach(producto => {
        
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = '<img src=${producto.imagen} alt="${producto.nombre}"><h5 class="card-title">${producto.nombre}</h5>';

    catalogoProductos.append(div);

    });
};*/

let carrito = [];

const contenedorProd = document.querySelector("#contenedorProd");
const contenedorCarrito = document.querySelector("#contenedorCarrito");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const continuarCompra = document.querySelector("#continuarCompra");


document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("storageCarrito")) || [];
    mostrarCarrito();
})

productos.forEach((producto) => {
    const {codigo, nombre, precio, imagen} = producto;
    contenedorProd.innerHTML += `

    
    <div class="col-md-3">
    <div class="card mt-3 mb-3">
        <img src="${imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <strong class="card-title">${nombre}</strong>
            <p class="card-text">${precio.toLocaleString("es-CL",{style: "currency", currency:"CLP"})} c/u</p>
            <button onclick="agregarProducto(${codigo})" class="btn btn-primary">Agregar al Carrito</button>
        </div>
    </div>
    </div>
    `;
    
}); 

continuarCompra.addEventListener("click", () => {
    if(carrito.length === 0){
        alert("Todavía no hay nada");
    }else{
        location.href = "carrito.html";
    };
});


vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
})

function agregarProducto(codigo){

    const productoExiste = carrito.some(producto => producto.codigo === codigo);

    if(productoExiste){
        const producto = carrito.map(producto => {
            if(producto.codigo === codigo){
                producto.cantidad++
            };
        });
    }else{
        const item = productos.find((producto) => producto.codigo === codigo);
        carrito.push(item);  
    };
    
    mostrarCarrito();
};

const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body")

    modalBody.innerHTML = "";
    
    carrito.forEach((producto) => {
        const {codigo, nombre, precio, imagen, cantidad} = producto;
        modalBody.innerHTML += `
        <div class="modal-contenedor">
            <div>
                <img class="img-fluid img-carrito" src="${imagen}"/>
            </div>
            <div>
                <p class="text-black">Producto: ${nombre}<br>
                    Precio: ${precio.toLocaleString("es-CL",{style: "currency", currency:"CLP"})}<br>
                    Cantidad: ${cantidad}
                </p>
                <button onclick="eliminarProducto(${codigo})" class="btn btn-danger">Eliminar</button>
            </div>
        </div>
        `
    })

    if(carrito.length == 0){
        modalBody.innerHTML = `
        <p id="cVacio" class="text-center">¡Tu carrito está vacío!</p>
        `
    };

    contenedorCarrito.textContent = carrito.length;

    precioTotal.innerHTML = carrito.reduce((contador, producto) => contador + producto.cantidad * producto.precio, 0);

    guardarStorage();
};

function eliminarProducto(codigo){
    const codProducto = codigo;
    carrito = carrito.filter((prod) => prod.codigo !== codProducto);
    mostrarCarrito();
};

function guardarStorage(){
    localStorage.setItem("storageCarrito", JSON.stringify(carrito));
}

function realizarCompra(){
    carrito.forEach((producto) => {
        const listaCompra = document.querySelector("#listaCompra tbody");
        const {codigo, nombre, precio, imagen, cantidad} = producto;

        const row = document.createElement("row");
        row.innerHTML += `
            <td class="text-center nada">
                <img src="${imagen}" class="img-fluid img-carrito">
            </td>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
        `
        listaCompra.appendChild("row");
    })
}