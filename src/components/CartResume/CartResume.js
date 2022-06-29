import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './_cartResume.scss'


export const CartResume = () => {
    const { cart, totalPriceCalculator } = useCartContext()

    return (
        <>
            <h3>Resumen de la compra</h3>
            <div>
                {
                    cart.map(item => 
                        <div key={item.id}>
                            <div>
                                <img src={item.imagen} alt={item.descripcion} />
                            </div>
                            <div>
                                <h4>{item.titulo}</h4>
                                <p>${item.precio * item.cantidad}</p>
                                <p>Cantidad: {item.cantidad}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                <h3>Total: ${totalPriceCalculator()}</h3>
                <Link to='/cart'>
                    <h4>Volver al carrito</h4>
                </Link>
            </div>
        </>
    )
}