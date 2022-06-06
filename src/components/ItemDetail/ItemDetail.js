
import { ItemCount } from "../ItemCount/ItemCount";
import './_itemDetail.scss'
import '../Item/_item.scss'
import { Link } from "react-router-dom";


export const ItemDetail = ({ item }) => {
    return (
        
        <div className="itemDetail__container">
            <div className="itemDetail__descripcion">
                <p>{item.descripcion}</p>
            </div>
            <div className="itemDetail__imgTitulo">
                <h2 className="itemDetail__imgTitulo__titulo">{item.titulo}</h2>
                <img className="itemDetail__imgTitulo__img" src={item.imagen} alt="{item.descripcion}"/>
            </div>
            <div className="itemDetail__botones">
                <h3>Precio: ${item.precio}</h3>
                <p>Stock: {item.stock}</p>
                <ItemCount stock={item.stock} cantidadInicial={0}/>
                <Link to='/'>
                    <button className="itemDetail__botones__btn">Agregar al carrito!</button>
                </Link>
            </div>
        </div>
    )



}