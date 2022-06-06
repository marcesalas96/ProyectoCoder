import { Link } from "react-router-dom";
import "./_header.scss"
export const Header = ({children}) => {
    // const children = this.props
    return(
        <header className="header">
                    {children}
            <div className="header__div">
                <div className="header__div__titulos">
                <h2>Milo's Store</h2>
                <h4>Tienda de mascotas</h4>
                </div>
                <nav className="header__div__navbar">
                    <ul className="header__div__navbar__list">
                        <li className="header__div__navbar__list__item"> <Link to={'/'}> Inicio</Link></li>
                        <li className="header__div__navbar__list__item"> <Link to={'/categoria/gato'}> Gatos </Link></li>
                        <li className="header__div__navbar__list__item"> <Link to={'/categoria/perro'}> Perros </Link></li>
                        <li className="header__div__navbar__list__item"> <Link to={'/'}> Nuestros clientes </Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}