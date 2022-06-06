import './_item.scss'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
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
            <Link to={`/productos/${item.id}`}> <button className='itemCard__btn'>Ver más!</button></Link>
        </Card.Body>
    </Card>
    )
}

