import StyledName from './styled.js';

export default function ShowName({name}) {
	return (
		<>
			<StyledName>{name ? name : 'Doggo'}</StyledName>
		</>
	);
}
