import { Link } from "react-router-dom";
import "./_header.scss"
export const Header = ({ children }) => {
    // const children = this.props
    return (
        <header className="header">
            {children}
            <div className="header__div">
                <Link to={'/'} className="header__div__link">
                    <div className="header__div__titulos" >
                        <h1>Milo's Store</h1>
                        <img src="../imagenes/milo1.png" alt="Imagen de un perro" className="header__div__titulos__img" />
                        <h5>Tienda de mascotas</h5>
                    </div>
                </Link>
                <nav className="header__div__navbar">
                    <ul className="header__div__navbar__list">
                        <li className="header__div__navbar__list__item"> <Link className="header__link" to={'/'}> Inicio</Link></li>
                        <li className="header__div__navbar__list__item"> <Link className="header__link" to={'/categoria/gato'}> Gatos </Link></li>
                        <li className="header__div__navbar__list__item"> <Link className="header__link" to={'/categoria/perro'}> Perros </Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}