import "./_hero.scss"
import imagenHero from "./heroImg.png"
export const Hero = () =>{
    return(
        <div className="hero__container">
            <div className="hero__container__div">
                <img src={imagenHero} alt="Imagen de nuestra tienda de mascotas, con un bulldog francés relamiéndose" className="hero__container__img"/>
            </div>
        </div>
    )
}