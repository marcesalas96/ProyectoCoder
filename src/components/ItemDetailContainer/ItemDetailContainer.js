import './_itemDetailContainer.scss'
import { useEffect, useState } from 'react'
import { Loader } from '../Loader/Loader'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { ReturnPage } from '../ReturnPage/ReturnPage';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const ItemDetailContainer = () => {
    const[loading, setLoading] = useState(true);
    const[item, setItem] = useState([])
    const {itemId} = useParams()
    useEffect(() =>{
        setLoading(true)
        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
        .catch((e)=>{
            console.log("Error: ", e)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[itemId])
    return(
        loading
        ?<Loader/>
        :
        <div className='itemDetailContainer'>  
            <ReturnPage/>
            <ItemDetail  item={item}/>
        
        </div>
        
        

    
)

}