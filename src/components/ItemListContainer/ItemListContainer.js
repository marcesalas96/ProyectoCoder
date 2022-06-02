import './_ItemListContainer.scss'
import { pedirDatos } from '../../mock/pedirDatos'
import { useEffect, useState } from 'react'
import { Loader } from '../Loader/Loader'
import { ItemList } from '../ItemList/ItemList'


export const ItemListContainer = ({children}) =>{
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((resp) => {
                setItems( resp )
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return(
        <>
            {
            loading
            ?<Loader/>
            
            :  
                <ItemList item={items}/>
            }
        </>
        
    )
}