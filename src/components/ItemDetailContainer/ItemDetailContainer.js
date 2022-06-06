import './_itemDetailContainer.scss'
import {pedirDatosId} from '../../mock/pedirDatosId';
import { useEffect, useState } from 'react'
import { Loader } from '../Loader/Loader'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const[loading, setLoading] = useState(true);
    const[item, setItem] = useState([])
    const {itemId} = useParams()
    console.log(item)
    useEffect(() =>{
        setLoading(true)
        pedirDatosId(itemId)
        .then((resp)=>{
            setItem(resp)
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
        
            <ItemDetail  item={item}/>
        
        </div>
        
        

    
)

}