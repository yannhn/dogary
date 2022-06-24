import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import WalkCard from './';

describe('WalkCard component', () => {
	it('should render the component', () => {
		const text = 'Click me';
		render(<WalkCard>{text}</WalkCard>);
		const button = screen.getByText(text);
		expect(button).toBeInTheDocument();
	});
});
