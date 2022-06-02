import './_ItemList.scss';
import { Item } from '../Item/Item';


export const ItemList = ({item}) => {
    return (
        <div className='item__container'>  
        {
            item.map((item) => <Item key={item.id} item={item}/>)
        }
        </div>
    )



} 