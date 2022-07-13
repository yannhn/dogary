import {StyledFilterContainer, StyledFilterLabel, StyledFilterSelect} from './styled';

export default function ToDoFilterSection({setStatus}) {
	const statusHandler = event => {
		console.log(event.target.value);
		setStatus(event.target.value);
	};

	return (
		<StyledFilterContainer>
			<StyledFilterLabel>Filter by status</StyledFilterLabel>
			<StyledFilterSelect onChange={statusHandler}>
				<option value="all">All</option>
				<option value="uncompleted">open</option>
				<option value="completed">completed</option>
			</StyledFilterSelect>
		</StyledFilterContainer>
	);
}
