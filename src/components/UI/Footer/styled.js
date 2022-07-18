import {Icon} from '@iconify/react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	position: relative;
	z-index: 1;
	margin-top: 6em;
`;

const FooterNav = styled.nav`
	display: flex;
	position: fixed;
	bottom: 0;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	background-color: #1f2b4d;
`;

const FooterNavItems = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 0.8em;
`;

const StyledIcon = styled(Icon)`
	color: white;

	&:hover {
		color: #ffbaa5;
	}

	&:active {
		color: #bad;
	}
`;

export {FooterContainer, FooterNav, FooterNavItems, StyledIcon};
