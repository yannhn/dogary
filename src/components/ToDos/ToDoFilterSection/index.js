import {FilterButton, HeadingContainer} from './styled';

export default function ToDoFilterSection({setFilter, title}) {
	return (
		<HeadingContainer>
			<FilterButton onClick={() => setFilter(title)}>{title}</FilterButton>
		</HeadingContainer>
	);
}
