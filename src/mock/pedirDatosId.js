import { productos } from "./data";

export const pedirDatosId =  (itemId) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const producto = productos.filter((producto) => producto.id === (itemId))
            console.log(producto)
            resolve(producto)
        },5000)
    })
}