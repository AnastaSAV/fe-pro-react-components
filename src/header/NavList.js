import React from "react";
import PropTypes from 'prop-types';

import NavItem from "./NavItem";

const NavList = (props) => {
	return (
		<nav>
		<ul className="nav-list">
		{
			props.items.map((navItem) => {
				return (
					<NavItem link={navItem.link} key={navItem}>
					{navItem.title}
					</NavItem>
					);
				})}
				</ul>
				</nav>
				);
			};
			NavList.propTypes = {
				items: PropTypes.arrayOf(
					PropTypes.shape({
						title: PropTypes.string.isRequired,
						link: PropTypes.string.isRequired,
					})
					).isRequired,
				};
				export default NavList;