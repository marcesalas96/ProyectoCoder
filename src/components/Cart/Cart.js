import { useCartContext } from '../../context/CartContext'
import { ReturnPage } from '../ReturnPage/ReturnPage'
import { CartHeader } from '../CartHeader/CartHeader'
import { CartItem } from '../CartItem/CartItem'
import { CartFooter } from '../CartFooter/CartFooter'
import { EmptyCart } from './EmptyCart'
import './_cart.scss'

export const Cart = () => {

    const { cart } = useCartContext()
    
    if(cart.length === 0){
        return(
            <EmptyCart/>
        )
    }

    return (
        <section className='section__cart'>
            <ReturnPage />
            <div className='cart__container'>
                <CartHeader />
                <div className='cart__div__productos'>
                    {
                        cart.map((item) => <CartItem key={item.id} item={item} />)
                    }
                </div>
                <div className='cart__div__footer'>
                    <CartFooter/>
                </div>
            </div>
        </section>
    );
}


