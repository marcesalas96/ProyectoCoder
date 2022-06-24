import { ReturnPage } from '../ReturnPage/ReturnPage'
import './_cart.scss'
import { Link } from 'react-router-dom'

export const EmptyCart = () =>{
    
    return(
        <section className='section__cart'>
            <ReturnPage/>
            <div className='emptyCart__container'>
                <h3>Hey! Tu carrito esta vacío!</h3>
                <Link to={'/'} >
                    <button className='emptyCart__btn'>REALIZAR COMPRA</button>
                </Link>
            </div>
            {
                
            }
        </section>
    )
}