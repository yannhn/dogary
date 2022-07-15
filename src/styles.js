import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
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
		font-size: 1rem;
	}
`;
