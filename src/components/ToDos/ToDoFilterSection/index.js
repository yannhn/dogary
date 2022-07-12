import {FilterButton, HeadingContainer} from './styled';

export default function ToDoFilterSection({title, setFilter}) {
	return (
		<HeadingContainer>
			<FilterButton onClick={() => setFilter(title)}>{title}</FilterButton>
		</HeadingContainer>
	);
}
