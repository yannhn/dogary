import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;

	}
	
	:root {
		--card-info-color: grey;
		--card-info-fontSize: 0.8rem;
		--card-info-fontWeight: light;

	}
	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		background-color: #FFF9F4;
		color: #242424;
		font-family: 'Roboto', sans-serif;
		font-size: 1rem;
	}
`;
