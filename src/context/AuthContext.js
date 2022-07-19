import { createContext, useState, useContext } from "react";
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}
export const AuthProvider = ({ children }) => {
    const MySwal = withReactContent(Swal)

    const [auth, setAuth] = useState({
        loggedIn: false,
        user: null
    })
    const logOut = () => {
        setAuth({
            loggedIn: false,
            user: null
        })
    }

    const addUserToDB = (values) => {
        const userRef = collection(db, "Users")
        const userArr = []
        getDocs(userRef).then((result) => {
            result.docs.map((doc) => {
                userArr.push(doc.data())
            })
            const mailUsed = userArr.find(user => values.mail === user.mail)
            if (mailUsed) {
                MySwal.fire({
                    title: `Lo sentimos`,
                    text: `El mail ingresado ya esta en uso`,
                    icon: 'error'
                })

            } else {

                const userCollection = collection(db, "Users")
                const simplyUser = {
                    nombre: values.nombre,
                    mail: values.mail,
                    apellido: values.apellido,
                    password: values.password,
                    direccion: values.direccion,
                    telefono: values.telefono
                }
                addDoc(userCollection, simplyUser).then(() => {
                    setAuth({ loggedIn: true, user: { ...simplyUser } })
                    MySwal.fire({
                        title: `Genial!`,
                        text: `Usuario creado con exito!`,
                        icon: 'succes',
                    })
                })
            }
        })
    }

    const validateLogin = (values) => {
        const userRef = collection(db, "Users")
        const userArr = []
        getDocs(userRef).then((result) => {
            result.docs.map((doc) => {
                userArr.push(doc.data())
            })
            const mailChecked = userArr.find(user => values.email === user.mail)
            if (mailChecked) {
                if (mailChecked.password === values.password) {
                    const usuario = { ...mailChecked }
                    setAuth({ loggedIn: true, user: usuario })
                }
                else {
                    MySwal.fire({
                        title: `Ha ocurrido un error`,
                        text: `Contraseña incorrecta`,
                        icon: 'error',
                    })

                }
            } else {
                MySwal.fire({
                    title: `Ha ocurrido un error`,
                    text: `El usuario ingresado es invalido`,
                    icon: 'error',
                })
            }
        })
    }
    return (
        <AuthContext.Provider value={{ auth, validateLogin, addUserToDB, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}