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
				<option value="uncompleted">Open</option>
				<option value="urgent">Urgent</option>
				<option value="completed">Completed</option>
			</StyledFilterSelect>
		</StyledFilterContainer>
	);
}
