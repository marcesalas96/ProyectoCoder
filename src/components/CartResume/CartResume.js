import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './_cartResume.scss'
import { BsTrash } from 'react-icons/bs'


export const CartResume = () => {
    const { cart, totalPriceCalculator, deleteCart } = useCartContext()

    return (
        <>
            <h4 className='cartResume__titulo'>Resumen de la compra</h4>
            <div className='cartResume__body'>
                {
                    cart.map(item =>
                        <div key={item.id} className='cartResume__body__container'>
                            <div>
                                <img src={item.imagen} alt={item.descripcion} className='cartResume__body__container__img' />
                            </div>
                            <div className='cartResume__body__container__text'>
                                <h6>{item.titulo}</h6>
                                <span>${item.precio * item.cantidad}</span>
                                <span>Cantidad: {item.cantidad}</span>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='cartResume__footer'>
                <h4 className='cartResume__footer__text'>Total: ${totalPriceCalculator()}</h4>
                <div className='cartResume__footer__container'>
                    <Link to='/cart' className='cartResume__footer__link'>
                        <span>Volver al carrito</span>
                    </Link>
                    <button className="cart__div__productos__cantidad__btn--thrash">
                        <BsTrash className='cart__div__productos__cantidad__logo' onClick={() => deleteCart()} />
                    </button>
                </div>
            </div>
        </>
    )
}