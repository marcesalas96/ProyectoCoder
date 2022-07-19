import './_item.scss'
import { Link } from 'react-router-dom';
export const Item = ({ item }) => {

    return (
        <Link to={`/productos/${item.id}`} className="link">
            <div className='itemCard'>
                <img src={item.imagen} className="itemCard__img" alt={item.descripcion} />
                <div className='itemCard__body'>
                    <h3 className='itemCard__body__titulo'>{item.titulo}</h3>
                    <div className='itemCard__body__texto'>
                        <h5>${item.precio}</h5>
                        <h6>{item.descripcion}</h6>
                    </div>
                </div>
            </div >
        </Link>
    )
}

