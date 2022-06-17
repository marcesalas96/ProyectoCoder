import { useCartContext } from '../../context/CartContext'
import Table from 'react-bootstrap/Table';

export const Cart = () => {

    const { cart, totalPriceCalculator, removeItem, deleteItem } = useCartContext()
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Titulo</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item) => (
                            <tr>
                            <td><img src={item.imagen} alt={item.descripcion}/></td>
                            <td>{item.titulo}</td>
                            <td>{item.cantidad}</td>
                            <td>${item.precio*item.cantidad}</td>
                            <td><button className="btn" onClick={()=>removeItem(item.id)}>-</button></td>
                            </tr>
                        ))
                    }
                </tbody>
                <button onClick={deleteItem}></button>
                <h4>Total: ${totalPriceCalculator()}</h4>
            </Table>
                    
        );
    }
