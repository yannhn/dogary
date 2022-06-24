import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FoodCard from './';

describe('Display FoodCard component', () => {
	it('should render FoodCard text', () => {
		render(<FoodCard />);

		const title = screen.getByText('Food');
		const typeOfFood = screen.getByText('Type of food');
		const time = screen.getByText('What:', {exact: false});
		const amount = screen.getByText('When:', {exact: false});
		expect(title).toBeInTheDocument();
		expect(typeOfFood).toBeInTheDocument();
		expect(time).toBeInTheDocument();
		expect(amount).toBeInTheDocument();
	});
	it('should render the FoocCard button', () => {
		render(<FoodCard />);

		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
	});
});

// describe('Button component', () => {
// 	it('should allow clicks', async () => {
// 		const handleClick = jest.fn();
// 		const text = 'Click me';
// 		render(<Button onClick={handleClick}>{text}</Button>);
// 		const button = screen.getByText(text);
// 		await userEvent.click(button);
// 		expect(handleClick).toHaveBeenCalledTimes(1);
// 	});
// });
