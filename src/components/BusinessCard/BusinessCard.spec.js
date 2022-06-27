import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import BusinessCard from './index';

describe('render businessCard component', () => {
	it('should render text elements', () => {
		render(<BusinessCard />);

		const title = screen.getByText('A dogs business');
		const typeOfBusiness = screen.getByText('What', {exact: false});

		expect(title).toBeInTheDocument();
		expect(typeOfBusiness).toBeInTheDocument();
	});
});
