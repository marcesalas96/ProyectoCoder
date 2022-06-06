import { productos } from "./data";

export const pedirDatosId =  (itemId) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const producto = productos.find((producto) => producto.id === Number(itemId))
            console.log(producto)
            resolve(producto)
        },3000)
    })
}