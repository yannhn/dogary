export default function NewToDoForm() {
	return (
		<section>
			<form>
				<label htmlFor="todo-text">Input your todo</label>
				<input id="todo-text" type="text" />
				<button>Add ToDo</button>
			</form>
		</section>
	);
}
