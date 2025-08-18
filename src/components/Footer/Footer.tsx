import './Footer.scss';
import NavBar from "../UI/NavBar";

export function Footer() {
	
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-inner">
					<NavBar parent="footer" />
					<div className="footer__contacts">
						<a href="tel:+74958235412"
						   className="phone"
						>
							+7 (495) 823-54-12
						</a>
						<a href="mailto:hello@womazing.com"
						   className="mail"
						>
							hello@womazing.com
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}