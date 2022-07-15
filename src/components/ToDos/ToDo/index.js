import {Icon} from '@iconify/react';
import {useState} from 'react';

import {
	ToDoItemContainer,
	ToDoItem,
	ToDoButtonGroup,
	DeleteButton,
	ToDoInputSection,
	EditButton,
	UrgentButton,
	CancelEdit,
	SaveEdit,
	EditToDoInput,
	EditToDoForm,
	EditToDoButtonGroup,
} from './styled';

export default function ToDo({
	id,
	title,
	editTask,
	completeToDo,
	deleteToDo,
	completed,
	urgentToDo,
	urgent,
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		editTask(id, newTitle);
		setIsEditing(false);
	}

	return (
		<>
			{isEditing ? (
				<ToDoItemContainer>
					<EditToDoForm onSubmit={handleSubmit}>
						<section>
							<label htmlFor="new-text-input" />
							<EditToDoInput
								id="new-text-input"
								type="text"
								defaultValue={title}
								required
								onChange={event => setNewTitle(event.target.value)}
							/>
						</section>
						<EditToDoButtonGroup>
							<CancelEdit
								type="button"
								onClick={() => {
									setIsEditing(false);
									setNewTitle('');
								}}
							>
								<Icon
									icon="mdi:close-circle"
									width="2rem"
									height="2rem"
									color="white"
								/>
							</CancelEdit>
							<SaveEdit type="submit">
								<Icon
									icon="mdi:check-circle"
									width="2rem"
									height="2rem"
									color="white"
								/>
							</SaveEdit>
						</EditToDoButtonGroup>
					</EditToDoForm>
				</ToDoItemContainer>
			) : (
				<ToDoItemContainer>
					{completed ? (
						<ToDoItem>
							<ToDoInputSection>
								<label htmlFor="checkbox" />
								<input
									id="checkbox"
									type="checkbox"
									defaultChecked="true"
									onChange={completeToDo}
								/>
								{title}
							</ToDoInputSection>
							<DeleteButton onClick={deleteToDo}>
								<Icon icon="mdi:delete" width="2rem" height="2rem" color="white" />
							</DeleteButton>
						</ToDoItem>
					) : (
						<ToDoItem>
							<ToDoInputSection>
								<label htmlFor="checkbox" />
								<input id="checkbox" type="checkbox" onChange={completeToDo} />
								{title}
							</ToDoInputSection>
							<ToDoButtonGroup>
								<EditButton onClick={() => setIsEditing(true)}>
									<Icon
										icon="mdi:pencil"
										width="2rem"
										height="2rem"
										color="#1f2b4d"
									/>
								</EditButton>
								<UrgentButton onClick={urgentToDo}>
									{urgent ? (
										<Icon
											icon="mdi:alarm-note-off"
											width="2rem"
											height="2rem"
											color=" #c3423f"
										/>
									) : (
										<Icon
											icon="mdi:alarm-note"
											width="2rem"
											height="2rem"
											color="#1f2b4d"
										/>
									)}
								</UrgentButton>
								<DeleteButton onClick={deleteToDo}>
									<Icon
										icon="mdi:delete"
										width="2rem"
										height="2rem"
										color="white"
									/>
								</DeleteButton>
							</ToDoButtonGroup>
						</ToDoItem>
					)}
				</ToDoItemContainer>
			)}
		</>
	);
}
