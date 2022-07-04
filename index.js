
// Inicializo las variables
let titulo = "TIENDA ON LINE \r\nElige una opción"
let totalProductos  = 5;
let totalCompra     = 0;
const arrayProducto = [];       // -> Array que contiene la lista de productos
let respuesta       = "SI";
let contadorID      = 0;
let opcion          = 1;

// Definición del objeto y su clase con constructor
class Producto { 
        constructor (id, nombre, precio) {
                this.id = id,
                this.nombre = nombre,
                this.precio = precio
        }
}

// recorro el array que contiene el contenido de los productos
const mostrarCatalogo = () => {
        let mensaje = titulo;
        
        for (let index = 0; index < arrayProducto.length; index++) {
                mensaje = mensaje + "\r\n";
                mensaje = mensaje + parseInt(arrayProducto[index].id)+". "+arrayProducto[index].nombre+" $"+parseFloat(arrayProducto[index].precio);       
        }
        return (mensaje);

}

// Añado producto al Objeto y lo añado al Array
const addProducto = (producto, precio) => {
        const productoAdd = new Producto(parseInt (++contadorID),producto,precio)
        arrayProducto.push (productoAdd)
}

//(`Mucho gusto ${nombre} `);
nombre = prompt (`Ingresa tu nombre por favor`);
respuesta = "SI"

opcion = prompt (`Hola ${nombre} elige la opción adecuada \r\n1. Asistir a curso\r\n2.Sacar turno`)

        while ((opcion == "1") || (opcion == "2")) {

                if (opcion = "1") {

                        while  (respuesta == "SI") {

                                let producto = prompt ("Descripción del producto");
                                let precio   = prompt ("Precio del producto");
                        
                                        addProducto(producto, precio);
                                        alert (mostrarCatalogo());
                                }
                }


        }