import {Icon} from '@iconify/react';
import {useState} from 'react';

import {FoodCardButtonGoal} from './styled';

export default function InputGoalButton() {
	return (
		<>
			<FoodCardButtonGoal onClick={() => setShowForm(!showForm)}>
				<Icon
					icon="mdi:bullseye-arrow"
					width="1.6rem"
					height="1.6rem"
					color="white"
					alt="add activity"
				/>
			</FoodCardButtonGoal>
		</>
	);
}
