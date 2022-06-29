import './_cartItem.scss'
import { BsCartPlus, BsCartDash, BsTrash } from 'react-icons/bs'
import { useCartContext } from '../../context/CartContext'

export const CartItem = ({ item }) => {
    const { addQty, removeQty, removeItem } = useCartContext()
    return (
        <div className='cart__div__productos__container' key={item.id}>
            <div className='cart__div__productos__imgYtitulo'>
                <img src={item.imagen} alt={item.descripcion} className="cart__div__productos__img" />
                <h5 className='cart__div__productos__titulo'>{item.titulo}</h5>
            </div>
            <div className='cart__div__productos__cantidad'>
                <button className='cart__div__productos__cantidad__btn'>
                    <BsCartDash className={`cart__div__productos__cantidad__logo`} onClick={() => removeQty(item.id)} />
                </button>
                <span>{item.cantidad}</span>
                <button className={`cart__div__productos__cantidad__btn${item.stock===item.cantidad ? "--max" : ""}`}>
                    <BsCartPlus className={`cart__div__productos__cantidad__logo`}  onClick={() => addQty(item.id)} />
                </button>
            </div>
            <div className='cart__div__productos__precio'>
                <span>${item.precio * item.cantidad}</span>
                <button className="cart__div__productos__cantidad__btn--thrash">
                    <BsTrash className='cart__div__productos__cantidad__logo' onClick={() => removeItem(item.id)}/>
                </button>
            </div>
        </div>
    )
}