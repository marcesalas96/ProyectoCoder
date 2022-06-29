import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { CartResume } from '../CartResume/CartResume'
import { db } from '../../firebase/config'
import { collection, addDoc, getDocs, writeBatch, query,where,documentId  } from 'firebase/firestore'
import './_checkout.scss'
import { Navigate } from 'react-router-dom'
import { ReturnPage } from '../ReturnPage/ReturnPage'

export const Checkout = () => {

    const { cart, totalPriceCalculator, deleteCart} = useCartContext()
    const [orderId, setOrderId] = useState(null)

    const simplyCart = cart.map(item => (
            {
                titulo: item.titulo,
                cantidad: item.cantidad,
                precio: item.precio,
                id: item.id
            }))
    

    const [values, setValues] = useState({
        mail: "",
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: ""
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const buyOrder = {
            buyer: values,
            items: simplyCart,
            total: totalPriceCalculator()
        }
        const batch = writeBatch(db)
        const productosRef = collection(db, "productos")
        const ordersRef = collection(db, "orders")
        const q = query(productosRef, where(documentId(), "in", cart.map(el => el.id)))
        
        const outOfStock = []
        const productos = await getDocs(q)

        productos.docs.forEach((doc)=>{
            const itemToUpdate = cart.find(prod => prod.id === doc.id)
            if ((doc.data().stock - itemToUpdate.cantidad) >= 0 ){
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            }
            else{
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0){
            addDoc(ordersRef, buyOrder)
            .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    deleteCart()
                })
        }else{
            outOfStock.forEach((item) => {
                alert(`No hay stock disponible de ${item.titulo}`)
            })
        }
    }

    if(orderId){
        return(
            <>
            <ReturnPage/>
            <div>
                <h3>Gracias por su compra!</h3>
                <p>Su orden de compra es: {orderId}</p>
            </div>
            </>
        )
    }

    if(cart.length === 0){
        return <Navigate to='/'/>
    }
    
    return (
        <section className='checkout__container'>
            <h2>Finalizá tu compra</h2>
            <div className='checkout__formContainer'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="mail">Email</label>
                        <input value={values.mail} name="mail" onChange={handleInputChange} type={'email'} className='checkout__formContainer__input' />
                    </div>
                    <div className='checkout__formContainer__inputDiv'>
                        <div className='checkout__formContainer__inputContainer'>
                            <label htmlFor="nombre">Nombre</label>
                            <input value={values.nombre} name='nombre' onChange={handleInputChange} type={"text"} className="checkout__formContainer__input" />
                        </div>
                        <div className='checkout__formContainer__inputContainer'>
                            <label htmlFor="apellido"> Apellido </label>
                            <input value={values.apellido} name='apellido' onChange={handleInputChange} type={"text"} className="checkout__formContainer__input" />
                        </div>
                        <div className='checkout__formContainer__inputContainer'>
                            <label htmlFor="direccion">Dirección</label>
                            <input value={values.direccion} name='direccion' onChange={handleInputChange} type={"text"} className="checkout__formContainer__input" />
                        </div>
                        <div className='checkout__formContainer__inputContainer'>
                            <label htmlFor="telefono">Teléfono</label>
                            <input value={values.telefono} name='telefono' onChange={handleInputChange} type={"text"} className="checkout__formContainer__input" />
                        </div>
                    </div>
                    <button className='checkout__formContainer__btn' type="submit">PAGAR</button>
                </form>
            </div>
            <div className='checkout__resumenContainer'>
                <CartResume/>
            </div>
        </section>
    )
}