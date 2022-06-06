import './_itemDetailContainer.scss'
import {pedirDatosId} from '../../mock/pedirDatosId';
import { useEffect, useState } from 'react'
import { Loader } from '../Loader/Loader'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const[loading, setLoading] = useState(true);
    const[item, setItem] = useState(null)
    const itemId = useParams()
    console.log(itemId)
    
    useEffect(() =>{
        setLoading(true)
        pedirDatosId(3)
        .then((resp)=>{
            console.log(resp)
            setItem(resp)
        })
        .catch((e)=>{
            console.log("Error: ", e)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    return(
        loading
        ?<Loader/>
        :
        <div className='itemDetailContainer'>  
        {
            item.map((item) => <ItemDetail key={item.id} item={item}/>)
        }
        </div>
        
        

    
)

}