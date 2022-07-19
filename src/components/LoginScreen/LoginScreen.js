import './_loginScreen.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup'
import { Navigate } from 'react-router-dom';
import { ReturnPage} from '../ReturnPage/ReturnPage'
import { useAuthContext } from '../../context/AuthContext';


export const LoginScreen = () => {
    const { validateLogin, auth } = useAuthContext()
    const schema = yup.object().shape({
        email: yup.string()
            .required('Este campo es obligatorio')
            .email('El email ingresado es invalido'),
        password: yup.string().required('Este campo es obligatorio')
    })
    if(auth.loggedIn){
        return <Navigate to='/' />
    }
    return (
        <section className='loginScreen'>
            <ReturnPage/>
            <div className='loginScreen__container'>
                <h4 className='loginScreen__titulo'>Iniciar sesión </h4>

                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    onSubmit={validateLogin}
                    validationSchema={schema}
                >
                    <Form className="loginScreen__form">
                        <div className='loginScreen__form__inputContainer'>
                            <label htmlFor="email">Ingresá tu mail</label>
                            <Field
                                className='loginScreen__form__inputContainer__input'
                                id="email"
                                name="email"
                                type="email"
                            />
                            <span className='span__error'>
                                <ErrorMessage name='email' />
                            </span>
                            <label htmlFor="password">Ingresá tu contraseña</label>
                            <Field
                                className='loginScreen__form__inputContainer__input'
                                id="password"
                                name="password"
                                type="password"
                            />
                            <span className='span__error'>
                                <ErrorMessage name='password' />
                            </span>
                        </div>
                        <div className='loginScreen__form__btnContainer'>
                            <button type={'submit'} className='checkout__formContainer__btn cart__div__footer__btn'>INGRESAR</button>
                        </div>
                    </Form>
                </Formik>
            </div>

        </section>
    )

}



