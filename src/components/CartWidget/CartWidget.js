import { HiOutlineShoppingCart } from 'react-icons/hi'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import { useCartContext } from '../../context/CartContext'
import "./_CartWidget.scss"
export const CartWidget = () => {
    const { auth, logOut } = useAuthContext()
    const { totalQuantity } = useCartContext()

    return (
        <div className="container__logoCarrito">
            <div className='div__container__logoCarrito'>
                <div className='div__logoIngresar'>
                    <MdOutlinePeopleAlt className='div__logoIngresar__logo' />
                    {auth.loggedIn
                        ?
                        <div className='div__logoIngresar__container'>
                        <h5>Hola, {auth.user.nombre} {auth.user.apellido}!</h5>
                        <span onClick={()=>{logOut()}} className="div__logoIngresar__span">Desconectarse</span>
                         </div> :
                        <h5><Link to='/registro' className='div__logoIngresar__link'>Registrarse</Link> / <Link to='/login' className='div__logoIngresar__link'>Inicio de sesión</Link></h5>
                    }
                </div>
                <div className={`div__logoCarrito${totalQuantity() === 0 ? "--empty" : ""}`}>
                    <Link to='/cart' className='div__logoCarrito__link'>
                        <HiOutlineShoppingCart className='div__logoCarrito__logo' />
                        <span className='div__logoCarrito__span'>{totalQuantity()}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
