import styled from 'styled-components';

const ToDoItem = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 0.5em;
	border-radius: 5px;
	background-color: #1f2b4d;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	font-size: 1rem;
`;

const ToDoInputSection = styled.section`
	gap: 0.2em;
	display: flex;
	align-items: center;
`;

const ToDoTitle = styled.p`
	margin-left: 0.2em;
	color: white;
	font-size: 1rem;
	text-align: auto;
	text-decoration: ${props => (props.line ? 'line-through' : '')};
`;

const ToDoButtonGroup = styled.section`
	display: flex;
	margin: 0 0.4em 0 2em;
`;

const EditButton = styled.button`
	border: none;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	background-color: #fff9f4;
`;

const UrgentButton = styled.button`
	border: none;
	background-color: #fff9f4;
`;

const DeleteButton = styled.button`
	border: none;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	background-color: #c3423f;
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
	color: #1f2b4d;
	font-size: 1.2rem;
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
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	background-color: #64b6ac;
`;

export {
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
