import {Icon} from '@iconify/react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	position: relative;
	z-index: 1;
	margin-top: 4em;
`;

const FooterNav = styled.nav`
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	display: flex;
	align-items: center;
	position: fixed;
	bottom: 0;
	justify-content: space-around;
	width: 100%;
	background-color: #1f2b4d;
`;

const FooterNavItems = styled(NavLink)`
	display: flex;
	align-items: center;
	padding: 1em;
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
