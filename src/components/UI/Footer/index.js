import {Icon} from '@iconify/react';

import {FooterContainer, FooterNav, FooterNavItems, FooterIcon} from './styled';

export default function Footer() {
	return (
		<FooterContainer>
			<FooterNav>
				<FooterNavItems to="/">
					<Icon icon="mdi:dog" width="2rem" height="2rem" color="white" />
				</FooterNavItems>
				<FooterNavItems to="/calendar">
					<Icon icon="mdi:calendar-month" width="2rem" height="2rem" color="white" />
				</FooterNavItems>
				<FooterNavItems to="/todo">
					<Icon icon="mdi:calendar-check" width="2rem" height="2rem" color="white" />
				</FooterNavItems>
			</FooterNav>
		</FooterContainer>
	);
}
