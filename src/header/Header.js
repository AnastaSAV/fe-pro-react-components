import React from "react";
import PropTypes from 'prop-types';

import Container from "../Container";
import Logo from "../Logo";
import NavList from "./NavList";

const Header = () => {
	const navElements = [
		{
			link: '/',
			title: 'Home',
		},
		{
			link: '/about',
			title: 'About us',
		},
		{
			link: '/contact',
			title: 'Conact us',
		},
		{
			link: '/help',
			title: 'Help page',
		},
	];
	return (
		<header className="header">
		<Container>
			<Logo>My logo</Logo>
		<NavList items={navElements} />
		</Container>
		</header>
		)
	};
	export default Header;