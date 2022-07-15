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

const DeleteButton = styled.button`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	border: none;
	background-color: #c3423f;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
`;

export {ToDoItemContainer, ToDoItem, ToDoButtonGroup, DeleteButton, ToDoInputSection};
