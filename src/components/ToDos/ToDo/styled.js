import styled from 'styled-components';

const ToDoItemContainer = styled.section``;

const ToDoItem = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 0.5em;
	color: white;
	font-size: 1.2rem;
	background-color: #1f2b4d;
	border-radius: 5px;
`;

const ToDoInputSection = styled.section`
	gap: 0.2em;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 20px;
`;

const ToDoTitle = styled.p`
	color: white;
	font-size: 1rem;
	text-decoration: ${props => (props.completed ? 'line-through' : '')};
`;

const ToDoButtonGroup = styled.section`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const EditToDoForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 0.5em;
`;

const EditToDoInput = styled.input`
	min-width: 12em;
	padding: 0.484rem;
	border: none;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	background: white;
	font-size: 1.2rem;
	color: #1f2b4d;
`;

const EditToDoButtonGroup = styled.section`
	display: flex;
	justify-content: flex-end;
`;

const CancelEdit = styled.button`
	border: none;
	background-color: #c3423f;
`;

const SaveEdit = styled.button`
	border: none;
	background-color: #64b6ac;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
`;

const EditButton = styled.button`
	border: none;
	background-color: #fff9f4;
`;

const UrgentButton = styled.button`
	border: none;
	background-color: #fff9f4;
`;

const DeleteButton = styled.button`
	border: none;
	background-color: #c3423f;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
`;

export {
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
	ToDoTitle,
};
