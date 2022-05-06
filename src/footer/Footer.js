import React from "react";
import PropTypes from 'prop-types';

import Container from "../Container";
import Logo from "../Logo";

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Logo>Logo</Logo>
				<p className="copyright">Small static blog @ 2022</p>
			</Container>
		</footer>
		)
	};
	export default Footer;