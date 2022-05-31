import { useState } from 'react';
import './_itemCount.scss'

export const ItemCount = (props) => {
    let stock = props.stock
    const cantidadInicial = props.cantidadInicial
    let [cantidad, setCantidad] = useState(cantidadInicial)
    function addCant() {
        if (stock > 0) {
            if(cantidad<stock){
                setCantidad(cantidad + 1);
            }
            else{
                alert("No tenemos suficiente stock!")
            }
        }
    }
    const removeCant = () => {
        if(cantidad>0){
            setCantidad(cantidad - 1)
        }
        else{
            setCantidad(cantidad = 0)
        }
    }


    return(
        <div className='itemCard__div'>
            <button className='itemCard__div__botones' onClick={addCant}> + </button>
            <p className='itemCard__div__texto'>{cantidad}</p>
            <button className='itemCard__div__botones' onClick={removeCant}>-</button>
        </div>
    )
}
