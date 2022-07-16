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
		color: #323232;
		font-family: sans-serif;
		font-size: 1rem;
	}
`;
