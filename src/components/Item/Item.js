import './_item.scss'
import {ItemCount} from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card';

export const Item = ({item}) => {
    
    return(
    <Card className='itemCard'>
        <Card.Img variant="top" src={item.imagen} className="itemCard__img"/>
        <Card.Body className='itemCard__body'>
            <Card.Title>{item.titulo}</Card.Title>
            <Card.Text>
                <p>{item.descripcion}</p>
                <h4>${item.precio}</h4>
            </Card.Text>
            <ItemCount stock={5} cantidadInicial={0}/>
            <button className='itemCard__btn'>Agregar al Carrito</button>
        </Card.Body>
    </Card>
    )
}

