import './_registerScreen.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup'
import { Navigate } from 'react-router-dom';
import { ReturnPage } from '../ReturnPage/ReturnPage'
import { useAuthContext } from '../../context/AuthContext';

const schema = yup.object().shape({
    mail: yup.string()
        .required('Este campo es obligatorio')
        .email('El email ingresado es invalido'),
    nombre: yup.string().required('Este campo es obligatorio').min(1).max(35, 'El maximo de caracteres es de 35'),
    apellido: yup.string().required('Este campo es obligatorio').min(1).max(35, 'El maximo de caracteres es de 35'),
    direccion: yup.string().required('Este campo es obligatorio').min(1).max(150, 'El maximo de caracteres es de 150'),
    telefono:yup.string().required('Este campo es obligatorio').min(1),
    password: yup.string().required('Este campo es obligatorio'),
    passwordCheck: yup.string().required('Este campo es obligatorio').oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')

})
export const RegisterScreen = () => {

    const { addUserToDB, auth } = useAuthContext()

    if (auth.loggedIn) {
        return <Navigate to='/' />
    }
    return (

        <section className='register'>
            <ReturnPage />
            <div className='register__container'>
                <h4 className='register__container__titulo'>Completá tus datos</h4>
                <Formik
                    initialValues={{
                        mail: "",
                        nombre: "",
                        apellido: "",
                        direccion: "",
                        telefono: "",
                        password: "",
                        passwordCheck: ""
                    }}
                    onSubmit={addUserToDB}
                    validationSchema={schema}
                >
                    {formik => (
                        <Form className='register__container__form'>
                            <div className='register__container__form__container'>
                                <div className='register__container__form__container__inputContainer'>
                                    <label htmlFor="mail">Email</label>
                                    <Field name="mail"
                                        id="mail"
                                        type={'email'}
                                        className='register__container__form__container__inputContainer__input' />
                                    <span className='span__error'>
                                        <ErrorMessage name='mail' />
                                    </span>
                                </div>
                                <div className='register__container__form__container--grid'>
                                    <div className='register__container__form__container--grid__inputContainer'>
                                        <label htmlFor="nombre">Nombre</label>
                                        <Field name='nombre' id="nombre" type={"text"} className="register__container__form__container--grid__inputContainer__input" />
                                        <span className='span__error'>
                                            <ErrorMessage name='nombre' />
                                        </span>
                                    </div>
                                    <div className='register__container__form__container--grid__inputContainer'>
                                        <label htmlFor="apellido"> Apellido </label>
                                        <Field name='apellido' id="apellido" type={"text"} className="register__container__form__container--grid__inputContainer__input" />
                                        <span className='span__error'>
                                            <ErrorMessage name='apellido' />
                                        </span>
                                    </div>
                                    <div className='register__container__form__container--grid__inputContainer'>
                                        <label htmlFor="direccion">Dirección</label>
                                        <Field name='direccion' id="direccion" type={"text"} className="register__container__form__container--grid__inputContainer__input" />
                                        <span className='span__error'>
                                            <ErrorMessage name='direccion' />
                                        </span>
                                    </div>
                                    <div className='register__container__form__container--grid__inputContainer'>
                                        <label htmlFor="telefono"> Teléfono </label>
                                        <Field name='telefono' id="telefono" type={"number"} className="register__container__form__container--grid__inputContainer__input" />
                                        <span className='span__error'>
                                            <ErrorMessage name='telefono' />
                                        </span>
                                    </div>
                                </div>
                                <div className='register__container__form__container__inputContainer'>
                                    <label htmlFor="password">Ingrese su contraseña</label>
                                    <Field name='password' id="password" type={"password"} className="register__container__form__container__inputContainer__input" />
                                    <span className='span__error'>
                                        <ErrorMessage name='password' />
                                    </span>
                                </div>
                                <div className='register__container__form__container__inputContainer'>
                                    <label htmlFor="passwordCheck">Reingrese su contraseña</label>
                                    <Field name='passwordCheck' id="passwordCheck" type={"password"} className="register__container__form__container__inputContainer__input" />
                                    <span className='span__error'>
                                        <ErrorMessage name='passwordCheck' />
                                    </span>
                                </div>
                            </div>
                            <button className='register__container__form__btn' type={'submit'}  >REGISTRARSE</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>

    )
}