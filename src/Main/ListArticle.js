import React from "react";
import Article from "./Article";
import PropTypes from 'prop-types';

const ListArticle = (props) => {
	return (
		<ul className="list">
		{
			props.articles.map((article) => {
				return <Article key={article}>
					<h2>{article.title}</h2>
					<p>{article.text}</p>
					</Article>
			})
		}
		</ul>
		);
	};
	ListArticle.propTypes = {
		articles: PropTypes.arrayOf(PropTypes.shape({
			title: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})).isRequired,
	};
	
	export default ListArticle;