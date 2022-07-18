import {FooterContainer, FooterNav, FooterNavItems, StyledIcon} from './styled';

export default function Footer() {
	return (
		<FooterContainer>
			<FooterNav>
				<FooterNavItems to="/">
					<StyledIcon icon="mdi:dog" width="2.4rem" height="2.4rem" color="" />
				</FooterNavItems>
				<FooterNavItems to="/calendar">
					<StyledIcon icon="mdi:calendar-month" width="2.4rem" height="2.4rem" color="" />
				</FooterNavItems>
				<FooterNavItems to="/todo">
					<StyledIcon icon="mdi:calendar-check" width="2.4rem" height="2.4rem" color="" />
				</FooterNavItems>
			</FooterNav>
		</FooterContainer>
	);
}
