import './NavBar.scss';
import {Link} from "react-router";

export function NavBar() {
	
	return (
		<nav className="nav header__nav">
			<Link to="/" className="logo header__logo">
				<img src="/logo.svg"
				     alt="Womazing"
				     width="139"
				     height="25"
				/>
			</Link>
			<ul className="nav__list header__nav__list">
				<li className="nav__item header__nav__item active">
					<Link to="/">
						Главная
					</Link>
				</li>
				<li className="nav__item header__nav-item">
					<Link to="/shop">
						Магазин
					</Link>
				</li>
				<li className="nav__item header__nav-item">
					<Link to="/about">
						О бренде
					</Link>
				</li>
				<li className="nav__item header__nav-item">
					<Link to="/contacts">
						Контакты
					</Link>
				</li>
			</ul>
		</nav>
	)
}