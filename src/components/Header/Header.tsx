import {type FC} from 'react';
import {Link} from "react-router";
import './Header.scss';

const Header: FC = () => {
    return (
	    <header className="header">
		    <div className="container">
			    <nav className="header__nav">
				    <Link to="/" className="logo header__logo">
					    <img src="/logo.svg"
					         alt="Womazing"
					         width="139"
					         height="25"
					    />
				    </Link>
				    <ul className="header__nav-list">
					    <li className="header__nav-item active">
						    <Link to="/">
							    Главная
						    </Link>
					    </li>
					    <li className="header__nav-item">
						    <Link to="/">
							    Магазин
						    </Link>
					    </li>
					    <li className="header__nav-item">
						    <Link to="/">
							    О бренде
						    </Link>
					    </li>
					    <li className="header__nav-item">
						    <Link to="/">
							    Контакты
						    </Link>
					    </li>
				    </ul>
			    </nav>
			    <div className="header__phone-wrapper">
				    <img src="/telephone-icon.svg" width={14.45} alt=""/>
				    <a href="tel:+74958235412"
				       className="phone header__phone"
				    >
					    +7 (495) 823-54-12
				    </a>
			    </div>
			    <button className="button cart-button header__cart-button">
				    <img src="/cart-icon.svg" width={24} alt="Корзина"/>
			    </button>
		    </div>
	    </header>
    );
};

export default Header;