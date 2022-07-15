import {Icon} from '@iconify/react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	position: relative;
	z-index: 1;
	margin-top: 4em;
`;

const FooterNav = styled.nav`
	display: flex;
	position: fixed;
	bottom: 0;
	justify-content: space-around;
	width: 100%;
	background-color: #1f2b4d;
`;

const FooterNavItems = styled(NavLink)`
	list-style-type: none;
	color: white;
	font-size: 2rem;
	text-decoration: none;

	&:hover {
		color: lightblue;
	}
	&.active {
		color: #ffbaa5;
	}
`;

const FooterIcon = styled(Icon)`
	&:hover {
		color: lightblue;
	}
	&.active {
		color: #ffbaa5;
	}
`;

export {FooterContainer, FooterNav, FooterNavItems, FooterIcon};
