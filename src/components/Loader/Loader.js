import './_loader.scss'
import perroLoader from './imagenesLoader/perroLoader.png'
import gatoLoader from './imagenesLoader/gatoLoader.png'
import pezLoader from './imagenesLoader/pezLoader.png'
import pajaroLoader from './imagenesLoader/pajaroLoader.png'
import reptilLoader from './imagenesLoader/reptilLoader.png'


export const Loader = () => {

    return(
        <div className='loader'>
            <img className='loader__img1' alt="" src={perroLoader}/>
            <img className='loader__img2' alt="" src={gatoLoader}/>
            <img className='loader__img3' alt="" src={pezLoader}/>
            <img className='loader__img4' alt="" src={pajaroLoader}/>
            <img className='loader__img5' alt="" src={reptilLoader}/>
        </div>
    )

} 