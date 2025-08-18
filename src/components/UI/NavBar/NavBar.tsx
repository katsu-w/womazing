import './NavBar.scss';
import {Link} from "react-router";

type PropType = {
	parent: 'footer' | 'header'
}

export function NavBar({ parent }: PropType) {
	
	return (
		<nav className="nav">
			<div className="brand-wrapper">
				<Link to="/" className="logo">
					<img src="/logo.svg"
					     alt="Womazing"
					     width="139"
					     height="25"
					/>
				</Link>
				{
					parent === 'footer' ?
						<div className="copyright">
							<small className="copyright__text">&copy; Все права защищены</small>
							<a
								className="copyright__link"
								href="/"
							>
								Политика конфиденциальности
							</a>
							<a
								className="copyright__link"
								href="/"
							>
								Публичная оферта
							</a>
						</div>
						:
						null
				}
			</div>
			<ul className="nav__list">
				<li className="nav__item active">
					<Link to="/">
						Главная
					</Link>
				</li>
				<li className="nav__item">
					<Link to="/shop">
						Магазин
					</Link>
					{
						parent === 'footer' ?
							<div className="nav__sub-item">
								<Link to="/shop?coats">Пальто</Link>
								<Link to="/shop?sweatshirts">Свитшоты</Link>
								<Link to="/shop?cardigans">Кардиганы</Link>
								<Link to="/shop?fatshirts">Толстовки</Link>
							</div>
							:
							null
					}
				</li>
				<li className="nav__item">
					<Link to="/about">
						О бренде
					</Link>
				</li>
				<li className="nav__item">
					<Link to="/contacts">
						Контакты
					</Link>
				</li>
			</ul>
		</nav>
	)
}