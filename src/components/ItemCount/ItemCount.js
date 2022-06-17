import './_itemCount.scss'

export const ItemCount = ({stock, setCantidad, cantidad,onAdd}) => {
    const max = stock
    function addCant() {
        cantidad < max && setCantidad(cantidad+1)
    }
    const removeCant = () => {
        cantidad>1 && setCantidad(cantidad-1)
    }

    return(
        <>
        <div className='itemCard__div'>
            <button className='itemCard__div__botones' onClick={removeCant}>-</button>
            <span className='itemCard__div__texto'>{cantidad}</span>
            <button className='itemCard__div__botones' onClick={addCant}>+</button>
        </div>
            <button onClick={onAdd} className="itemCard__div__botones__btn">Agregar al carrito!</button>
        </>
    )
}
