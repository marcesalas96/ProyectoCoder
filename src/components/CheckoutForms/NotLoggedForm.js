import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { CartResume } from '../CartResume/CartResume'
import { db } from '../../firebase/config'
import { collection, addDoc, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup'
import '../Checkout/_checkout.scss'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const schema = yup.object().shape({
    mail: yup.string().required('Este campo es obligatorio').email('El formato de mail ingresado es incorrecto'),
    nombre: yup.string().required('Este campo es obligatorio').max(30, 'El maximo es de 30 caracteres'),
    apellido: yup.string().required('Este campo es obligatorio').max(30, 'El maximo es de 30 caracteres'),
    direccion: yup.string().required('Este campo es obligatorio'),
    telefono: yup.string().required('Este campo es obligatorio').max(30, 'El maximo es de 30 caracteres')
})
const MySwal = withReactContent(Swal)

export const NotLoggedForm = () => {
    const { auth } = useAuthContext()
    const { cart, totalPriceCalculator, deleteCart } = useCartContext()
    const [orderId, setOrderId] = useState(null)

    const simplyCart = cart.map(item => (
        {
            titulo: item.titulo,
            cantidad: item.cantidad,
            precio: item.precio,
            id: item.id
        }))

    const orderGenerator = async (values) => {

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

        productos.docs.forEach((doc) => {
            const itemToUpdate = cart.find(prod => prod.id === doc.id)
            if ((doc.data().stock - itemToUpdate.cantidad) >= 0) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            }
            else {
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0) {
            addDoc(ordersRef, buyOrder)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    deleteCart()
                })
        } else {
            outOfStock.forEach((item) => {
                MySwal({
                    title: `Lo sentimos`,
                    text: `No hay stock disponible de ${item.titulo}`,
                    icon: 'error',
                })
            })
        }
    }

    if (orderId) {
        return (
            <section className='checkout'>
                <div className='checkout__compraModal'>
                    <h3>Gracias por su compra!</h3>
                    <p>Su orden de compra es: {orderId}</p>
                </div>
            </section>
        )
    }

    if (cart.length === 0) {
        return <Navigate to='/' />
    }

    return (
        <section className='checkout'>
            <h2 className='checkout__titulo'>Finaliz?? tu compra</h2>
            <div className='checkout__container'>
                <div className='checkout__formContainer'>
                    <h4 className='checkout__formContainer__titulo'>Complet?? tus datos</h4>
                    <Formik
                        initialValues={{
                            mail: "",
                            nombre: "",
                            apellido: "",
                            direccion: "",
                            telefono: ""
                        }}
                        onSubmit={orderGenerator}
                        validationSchema={schema}
                    >

                        <Form className='checkout__formContainer__form'>
                            <div className='checkout__formContainer__mail'>
                                <label htmlFor="mail">Email</label>
                                <Field name="mail" type={'email'} className='checkout__formContainer__input' />
                                <span className='span__error'>
                                    <ErrorMessage name='mail' />
                                </span>
                            </div>
                            <div className='checkout__formContainer__inputDiv'>
                                <div className='checkout__formContainer__inputContainer'>
                                    <label htmlFor="nombre">Nombre</label>
                                    <Field name='nombre' type={"text"} className="checkout__formContainer__input" />
                                    <span className='span__error'>
                                        <ErrorMessage name='nombre' />
                                    </span>
                                </div>
                                <div className='checkout__formContainer__inputContainer'>
                                    <label htmlFor="apellido"> Apellido </label>
                                    <Field name='apellido' type={"text"} className="checkout__formContainer__input" />
                                    <span className='span__error'>
                                        <ErrorMessage name='apellido' />
                                    </span>
                                </div>
                                <div className='checkout__formContainer__inputContainer'>
                                    <label htmlFor="direccion">Direcci??n</label>
                                    <Field name='direccion' type={"text"} className="checkout__formContainer__input" />
                                    <span className='span__error'>
                                        <ErrorMessage name='direccion' />
                                    </span>
                                </div>
                                <div className='checkout__formContainer__inputContainer'>
                                    <label htmlFor="telefono">Tel??fono</label>
                                    <Field name='telefono' type={"text"} className="checkout__formContainer__input" />
                                    <span className='span__error'>
                                        <ErrorMessage name='telefono' />
                                    </span>
                                </div>
                            </div>
                            <div className='checkout__formContainer__inputDiv__checkbox'>
                                <label htmlFor='newsletter'>Quiero recibir promociones</label>
                                <Field name='newsletter' type={'checkbox'} />
                            </div>
                            <button className='checkout__formContainer__btn cart__div__footer__btn' type="submit">FINALIZAR COMPRA</button>
                        </Form>
                    </Formik>
                </div>
                <div className='checkout__resumenContainer'>
                    <CartResume />
                </div>
            </div>
        </section>

    )
}