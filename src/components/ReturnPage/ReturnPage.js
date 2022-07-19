import {MdOutlineArrowBackIos } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import './_returnPage.scss'
export const ReturnPage = () => {

    const navigate = useNavigate()
    const returnPage = () => {
        navigate('/')
    }

    return (
        <>
            <div className='divReturn' onClick={returnPage}>
                <MdOutlineArrowBackIos className='divReturn__logo' />
                <span className='divReturn__span'>Volver al inicio!</span>
            </div>

        </>

    )
}
