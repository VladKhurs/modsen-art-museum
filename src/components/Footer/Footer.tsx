import './Footer.scss';
import React from 'react';
import logo from '@/assets/logo.svg';
import modsen from '@/assets/modsen.svg';

const Footer: React.FC = () => (
	<footer className="footer">
		<div className="container">
			<div className="logo">
				<img src={logo} alt="museum" />
				<p>
					Museum of <span>Art</span>
				</p>
			</div>
			<div className="modsen">
				<img src={modsen} alt="modsen" />
			</div>
		</div>
	</footer>
);

export default Footer;
