import {FilterContainer, FilterLabel} from './styled';

export default function ToDoFilterSection({setStatus}) {
	const statusHandler = event => {
		console.log(event.target.value);
		setStatus(event.target.value);
	};

	return (
		<FilterContainer>
			<FilterLabel>Filter by status</FilterLabel>
			<select onChange={statusHandler}>
				<option value="all">All</option>
				<option value="uncompleted">open</option>
				<option value="completed">completed</option>
			</select>
		</FilterContainer>
	);
}
