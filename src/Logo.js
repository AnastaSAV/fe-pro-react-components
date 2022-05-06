import React from "react";
import PropTypes from 'prop-types';

const Logo = (props) => {
	return (
		<a href="" className="logo">
		{props.children}
		</a>
		);
	};
	Logo.propTypes = {
		children: PropTypes.string.isRequired,
	};
	export default Logo;