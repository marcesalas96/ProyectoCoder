export const Header = () => {

    return(
        <header className="header">
            <div className="header__div">
                <div className="header__div__titulos">
                <h2>Milo's Store</h2>
                <h4>Tienda de mascotas</h4>
                </div>
                <div className="header__div__navbar">
                    <nav className="header__div__navbar__nav">
                        <ul className="header__div__navbar__nav__list">
                            <li className="header__div__navbar__nav__list__item">Inicio</li>
                            <li className="header__div__navbar__nav__list__item">Productos</li>
                            <li className="header__div__navbar__nav__list__item">Quienes Somos</li>
                            <li className="header__div__navbar__nav__list__item">Nuestros clientes 🐕</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <hr/>
        </header>
    );
}