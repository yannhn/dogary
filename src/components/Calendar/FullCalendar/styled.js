import styled from 'styled-components';

export const StyleWrapper = styled.div`
	padding: 1em;

	.fc-bg-event {
		background: #ea2001;
	}
	.fc-event-today {
		background-color: blue;
	}
	.fc .fc-button-primary {
		border: none;
		background-color: #242424;
	}
	.fc-toolbar-title {
		color: #242424;
		font-size: 1.6rem;
		text-align: center;
	}

	.fc {
		padding: 1em;
		border-radius: 10px;
		background: rgb(255, 255, 255);
		background: linear-gradient(285deg, rgba(255, 255, 255, 1) 0%, rgba(249, 248, 248, 1) 50%);
		box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
	}
`;
