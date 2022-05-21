import './_ItemListContainer.scss'
export const ItemListContainer = ({children}) =>{
    
    return(
        <div className="item__container">
            {children}
        </div>
    )
}