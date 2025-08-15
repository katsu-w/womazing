import {type FC} from 'react';
import './Header.scss';
import NavBar from "../UI/NavBar";

export const Header: FC = () => {
    return (
	    <header className="header">
		    <div className="container">
			    <NavBar parent="header" />
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