
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import './_itemDetail.scss'
import { Link } from "react-router-dom";
export const ItemDetail = ({ item }) => {

    const [counter, setCounter] = useState(1)
    const [add, setAdd] = useState(false)

    const handleAddToCart = () => {
        const itemToCart = {
            ...item,
            cantidad: counter
        }
        setAdd(true)
        console.log(itemToCart)
    }


    return (
        <div className="itemDetail__container">
            <div className="itemDetail__descripcion">
                <p>{item.descripcion}</p>
            </div>
            <div className="itemDetail__imgTitulo">
                <h2 className="itemDetail__imgTitulo__titulo">{item.titulo}</h2>
                <img className="itemDetail__imgTitulo__img" src={item.imagen} alt="{item.descripcion}" />
            </div>
            <div className="itemDetail__texto">
                <h3>Precio: ${item.precio}</h3>
                <p>Stock: {item.stock}</p>
                {
                    !add ?
                        <ItemCount
                            stock={item.stock}
                            cantidad={counter}
                            setCantidad={setCounter}
                            onAdd={handleAddToCart}
                        />
                        :
                        <Link to='/cart'>
                            <button className="itemDetail__btn">Terminar compra!</button>
                        </Link>
                }
            </div>
        </div>
    )



}