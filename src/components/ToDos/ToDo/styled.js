import styled from 'styled-components';

const ToDoItemContainer = styled.section`
	display: flex;
	gap: 0.6em;
`;

const ToDoItem = styled.section`
	display: flex;
	align-items: center;
	margin-top: 1em;
	color: white;
	font-size: 1.4rem;
`;

const ToDoButtonGroup = styled.section`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export {ToDoItemContainer, ToDoItem, ToDoButtonGroup};
