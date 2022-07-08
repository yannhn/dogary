import {FooterContainer, FooterNav, FooterNavItems} from './styled';

export default function Footer() {
	return (
		<FooterContainer>
			<FooterNav>
				<FooterNavItems to="/">Home</FooterNavItems>
				<FooterNavItems to="/calendar">Calendar</FooterNavItems>
			</FooterNav>
		</FooterContainer>
	);
}
