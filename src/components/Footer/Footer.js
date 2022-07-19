import './_footer.scss'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__container__img">
                    <h6>Él es la inspiracíon de la pagina</h6>
                    <img src="../imagenes/milo2.png" alt="Foto de un perrito" />
                    <h4>Milo</h4>
                </div>

                <div className="footer__container__texto">
                    <h4>Pagina creada con amor por Marcelo Salas 💖</h4>
                </div>
                <div className="footer__container__links">
                    <h4>Contactame!</h4>
                    <div>
                        <a href='https://www.linkedin.com/in/marcelo-salas-295b09216/' target={'blank'}><BsLinkedin /></a>
                        <a href='https://github.com/marcesalas96' target={'blank'}><BsGithub /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}