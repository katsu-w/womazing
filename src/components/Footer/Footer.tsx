import './Footer.scss';
import NavBar from "../UI/NavBar";

export function Footer() {
	
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-inner">
					<NavBar parent="footer" />
					<div className="footer__contacts">
						<div className="footer__traditionals">
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
						<div className="footer__social-media">
							<a
								class="footer__social-link"
								href="https://github.com/katsu-w"
							>
								<img
									src="/public/instagram-icon.svg"
									alt=""
									width="22"
									height="22"
								/>
							</a>
							<a
								class="footer__social-link"
								href="https://github.com/katsu-w"
							>
								<img
									src="/public/facebook-icon.svg"
									alt=""
									width="21"
									height="21"
								/>
							</a>
							<a
								class="footer__social-link"
								href="https://github.com/katsu-w"
							>
								<img
									src="/public/twitter-icon.svg"
									alt=""
									width="23"
									height="23"
								/>
							</a>
						</div>
						<img
							className="footer__payments"
							src="/public/visa-mastercard-logos.png"
							alt=""
							width="68"
							height="22"
						/>
					</div>
				</div>
			</div>
		</footer>
	)
}