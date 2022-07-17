import {Icon} from '@iconify/react';

import {FooterContainer, FooterNav, FooterNavItems} from './styled';

export default function Footer() {
	return (
		<FooterContainer>
			<FooterNav>
				<FooterNavItems to="/">
					<Icon
						icon="mdi:dog"
						fill="currentColor"
						width="2.4rem"
						height="2.4rem"
						color="white"
					/>
				</FooterNavItems>
				<FooterNavItems to="/calendar">
					<Icon
						icon="mdi:calendar-month"
						fill="currentColor"
						width="2.4rem"
						height="2.4rem"
						color="white"
					/>
				</FooterNavItems>
				<FooterNavItems to="/todo">
					<Icon
						icon="mdi:calendar-check"
						fill="currentColor"
						width="2.4rem"
						height="2.4rem"
						color="white"
					/>
				</FooterNavItems>
			</FooterNav>
		</FooterContainer>
	);
}
