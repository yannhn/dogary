export default function NewToDoForm() {
	return (
		<section>
			<form>
				<label htmlFor="todo-text">Input your todo</label>
				<input id="todo-text" type="text" />
				<label htmlFor="todo-date">Pick a date</label>
				<input type="date"></input>
			</form>
		</section>
	);
}
