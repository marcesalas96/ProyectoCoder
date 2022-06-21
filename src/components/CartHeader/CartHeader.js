import './_cartHeader.scss'


export const CartHeader = () => {
    
    return(

    <div className='cart__div'>
        <ul className='cart__list'>
            <li className='cart__list__producto'>Producto</li>
            <li className='cart__list__cantidad'>Cantidad</li>
            <li className='cart__list__precio'>Precio</li>
        </ul>
    </div>
    )
}