import Card from 'react-bootstrap/Card';
import './_ItemListCards.scss'

export const ItemListCards = ({ imagen, titulo, descripcion, precio }) => {

    return (
        <Card className='itemCard'>
            <Card.Img variant="top" src={imagen} />
            <Card.Body className='itemCard__body'>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    <p>{descripcion}</p>
                    <h4>{precio}</h4>
                </Card.Text>
                <button className='itemCard__btn'>Agregar al carrito</button>
            </Card.Body>
        </Card>
    )



} 