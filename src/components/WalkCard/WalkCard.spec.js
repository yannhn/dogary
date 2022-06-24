import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import WalkCard from './';

describe('WalkCard component', () => {
	// Arrange
	it('should render the text in the component', () => {
		render(<WalkCard />);

		const title = screen.getByText('Walks');
		const length = screen.getByText('Duration', {exact: false});
		const time = screen.getByText('When', {exact: false});
		expect(title).toBeInTheDocument();
		expect(length).toBeInTheDocument();
		expect(time).toBeInTheDocument();
	});
	it('should render the button in the component', () => {
		render(<WalkCard />);

		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});
});
