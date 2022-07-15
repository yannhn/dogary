import styled from 'styled-components';

const ToDoItemContainer = styled.section`
	gap: 0.6em;
`;

const ToDoItem = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 0.6em;
	color: white;
	font-size: 1.2rem;
	background-color: #1f2b4d;
	border-radius: 5px;
`;

const ToDoInputSection = styled.section`
	gap: 1em;
`;

const ToDoButtonGroup = styled.section`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const EditToDoInput = styled.input`
	padding: 0.5rem;
	border: none;
	// TODO: Fix width
	background: white;
	border-bottom-left-radius: 5px;
	border-top-left-radius: 5px;
`;

const CancelEdit = styled.button`
	border: none;
	background-color: #c3423f;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
`;

const SaveEdit = styled.button`
	border: none;
	background-color: #628b48;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
`;

const EditButton = styled.button`
	border: none;
	background-color: #fff9f4;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
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
};
