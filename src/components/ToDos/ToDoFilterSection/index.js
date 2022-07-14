import {StyledFilterContainer, StyledFilterLabel, StyledFilterSelect} from './styled';

export default function ToDoFilterSection({onChangeStatus}) {
	const statusHandler = event => {
		onChangeStatus(event.target.value);
	};

	return (
		<StyledFilterContainer>
			<StyledFilterLabel>Filter your ToDos</StyledFilterLabel>
			<StyledFilterSelect onChange={statusHandler}>
				<option value="all">All</option>
				<option value="uncompleted">open</option>
				<option value="completed">completed</option>
			</StyledFilterSelect>
		</StyledFilterContainer>
	);
}
