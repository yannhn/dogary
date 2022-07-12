import styled from 'styled-components';

const ToDoItemContainer = styled.section`
	display: flex;
	gap: 0.6em;
`;

const ToDoItem = styled.label`
	color: white;
`;

const HideButton = styled.section`
	display: ${props => (props.completed ? 'none' : '')};
`;

export {ToDoItemContainer, ToDoItem, HideButton};
