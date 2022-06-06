import {HiOutlineShoppingCart} from 'react-icons/hi'
import {MdOutlinePeopleAlt} from 'react-icons/md'
import "./_CartWidget.scss"
export const CartWidget = () =>{
    return(
        <div className="container__logoCarrito">
            <div className='div__container__logoCarrito'>
                <div className='div__logoIngresar'>
                    <MdOutlinePeopleAlt className='div__logoIngresar__logo'/>
                    <h5>Registrarse / Inicio de sesión</h5>
                </div>
                <div className='div__logoCarrito'>
                    <HiOutlineShoppingCart className='div__logoCarrito__logo'/>
                </div>
            </div>
        </div>
    )
}
