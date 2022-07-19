import { useAuthContext } from "../../context/AuthContext"
import { LoggedForm } from "../CheckoutForms/LoggedForm"
import { NotLoggedForm } from "../CheckoutForms/NotLoggedForm"



export const Checkout = () =>{
    const {auth} = useAuthContext()
    return(
        <>
            {auth.loggedIn ? <LoggedForm/>: <NotLoggedForm/>}
        </>
    )
}