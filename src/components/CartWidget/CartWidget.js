import {HiOutlineShoppingCart} from 'react-icons/hi'
import {MdOutlinePeopleAlt} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import "./_CartWidget.scss"
export const CartWidget = () =>{

    const {totalQuantity} = useCartContext()

    return(
        <div className="container__logoCarrito">
            <div className='div__container__logoCarrito'>
                <div className='div__logoIngresar'>
                    <MdOutlinePeopleAlt className='div__logoIngresar__logo'/>
                    <h5>Registrarse / Inicio de sesión</h5>
                </div>
                <div className={`div__logoCarrito${totalQuantity()===0 ? "--empty" : ""}`}>
                    <Link to='/cart' className='div__logoCarrito__link'>
                        <HiOutlineShoppingCart className='div__logoCarrito__logo'/>
                        <span className='div__logoCarrito__span'>{totalQuantity()}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
