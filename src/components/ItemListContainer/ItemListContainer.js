import './_ItemListContainer.scss'
import { pedirDatos } from '../../mock/pedirDatos'
import { useEffect, useState } from 'react'
import { Loader } from '../Loader/Loader'
import { ItemList } from '../ItemList/ItemList'
import {Hero} from '../Hero/Hero'
import { useParams } from 'react-router-dom'


export const ItemListContainer = () =>{
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoria} = useParams()
    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((resp) => {
                if(!categoria){ 
                setItems( resp )}
                else{
                setItems( resp.filter((item) => item.categoria===categoria))
                }
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoria])

    return(
        <>
            <Hero/>
            {
            loading
            ?<Loader/>
            
            :  <>
                <ItemList item={items}/>
                </>
            }
        </>
        
    )
}