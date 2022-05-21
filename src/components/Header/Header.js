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
                        <li className="header__div__navbar__list__item">Inicio</li>
                        <li className="header__div__navbar__list__item">Productos</li>
                        <li className="header__div__navbar__list__item">Quienes Somos</li>
                        <li className="header__div__navbar__list__item">Nuestros clientes </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}