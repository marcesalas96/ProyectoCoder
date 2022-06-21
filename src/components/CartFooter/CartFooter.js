import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { BsCartX } from 'react-icons/bs'
import './_cartFooter.scss'

export const CartFooter = () => {
    const { totalPriceCalculator, deleteCart } = useCartContext()

    return (
        <>
            <h4 className='cart__div__footer__text'>Total: ${totalPriceCalculator()}</h4>
            <div className='cart__div__footer__botones'>
                <Link to='/checkout' className='cart__div__footer__link'>
                    <button className='cart__div__footer__btn'>TERMINAR COMPRA</button>
                </Link>
                <button className='cart__div__footer__btn-vaciar' onClick={() => deleteCart()} >VACIAR CARRITO <BsCartX className='cart__div__footer__btn__logo' /></button>
            </div>
        </>
    )
}