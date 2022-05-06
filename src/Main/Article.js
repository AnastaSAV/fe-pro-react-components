import React from "react";
import PropTypes from 'prop-types';

const Article = (props) => {
	return (
		<li className="list__item">
		{props.children}
		</li>
		)
	};
	Article.propTypes = {
		children: PropTypes.string.isRequired,
	};
	export default Article;