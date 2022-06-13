import './_itemDetailContainer.scss'
import {pedirDatosId} from '../../mock/pedirDatosId';
import { useEffect, useState } from 'react'
import { Loader } from '../Loader/Loader'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useNavigate, useParams } from 'react-router-dom';
import {MdOutlineArrowBackIos } from 'react-icons/md'

export const ItemDetailContainer = () => {
    const[loading, setLoading] = useState(true);
    const[item, setItem] = useState([])
    const {itemId} = useParams()
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
    const navigate = useNavigate()
    const returnPage = () => {
        navigate(-1)
    }
    return(
        loading
        ?<Loader/>
        :
        <div className='itemDetailContainer'>  
            <div className='itemDetailContainer__divReturn'>
            
            <MdOutlineArrowBackIos className='itemDetailContainer__divReturn__logo' onClick={returnPage}/>
            <span className='itemDetailContainer__divReturn__span' onClick={returnPage}>Volver</span>
            </div>
            <ItemDetail  item={item}/>
        
        </div>
        
        

    
)

}