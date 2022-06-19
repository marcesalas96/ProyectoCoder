import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { BsCartDash, BsCartX, BsCartPlus } from 'react-icons/bs'
import './_cart.scss'
import { ReturnPage } from '../ReturnPage/ReturnPage'

export const Cart = () => {

    const { cart, totalPriceCalculator, removeQty, deleteCart, addQty } = useCartContext()
    return (
        <section className='section__cart'>
            <ReturnPage />
            <div className='cart__container'>
                <div className='cart__div'>
                    <ul className='cart__list'>
                        <li className='cart__list__producto'>Producto</li>
                        <li className='cart__list__cantidad'>Cantidad</li>
                        <li className='cart__list__precio'>Precio</li>
                    </ul>
                </div>
                <div className='cart__div__productos'>
                    {
                        cart.map((item) => (
                            <div className='cart__div__productos__container' key={item.id}>
                                <div className='cart__div__productos__imgYtitulo'>
                                    <img src={item.imagen} alt={item.descripcion} className="cart__div__productos__img" />
                                    <h5 className='cart__div__productos__titulo'>{item.titulo}</h5>
                                </div>
                                <div className='cart__div__productos__cantidad'>
                                    <button className='cart__div__productos__cantidad__btn'><BsCartPlus className='cart__div__productos__cantidad__logo' onClick={() => addQty(item.id)} /></button>
                                    <span>{item.cantidad}</span>
                                    <button className='cart__div__productos__cantidad__btn'><BsCartDash className='cart__div__productos__cantidad__logo' onClick={() => removeQty(item.id)} /></button>
                                </div>
                                <div className='cart__div__productos__precio'>
                                    <span>${item.precio * item.cantidad}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='cart__div__footer'>
                    <h4 className='cart__div__footer__text'>Total: ${totalPriceCalculator()}</h4>
                    <div className='cart__div__footer__botones'>
                        <Link to='/checkout' className='cart__div__footer__link'>
                            <button className='cart__div__footer__btn'>TERMINAR COMPRA</button>
                        </Link>
                        <button className='cart__div__footer__btn-vaciar' onClick={()=> deleteCart()} >VACIAR CARRITO <BsCartX className='cart__div__footer__btn__logo' /></button>
                    </div>
                </div>
            </div>

        </section>
    );
}
