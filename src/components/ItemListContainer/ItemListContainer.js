import './_ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { Loader } from '../Loader/Loader'
import { ItemList } from '../ItemList/ItemList'
import {Hero} from '../Hero/Hero'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'


export const ItemListContainer = () =>{
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoria} = useParams()
    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoria ? query(productosRef, where("categoria","==",categoria)) : productosRef
        getDocs(q)
            .then((resp) => {
                setItems(resp.docs.map((doc) => 
                ({
                    id: doc.id,
                    ...doc.data()
                })))
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