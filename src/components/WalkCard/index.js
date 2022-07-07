import {useState} from 'react';

import FormModal from '../FormModal';
import InputWalk from '../InputWalk/index';

import {WalkCardContainer, WalkCardHead, WalkCardButton} from './styled';

export default function WalkCard() {
	const [showForm, setShowForm] = useState(false);
	const [walkItem, setWalkItem] = useState([]);
	const [count, setCount] = useState({});

	function addCounter(prevItem) {
		const newCount = {...walkItem, ...prevItem};
		setCount(newCount);
	}

	function addNewWalkItem(prevItem) {
		const newWalkItem = [...walkItem, prevItem];
		setWalkItem(newWalkItem);
	}

	return (
		<>
			<WalkCardContainer>
				<WalkCardHead>
					<section>
						<h2>Walks</h2>
						<p>Todays duration: {count.result} min</p>
					</section>
					<WalkCardButton
						onClick={() => {
							setShowForm(!showForm);
						}}
					>
						{showForm ? '-' : '+'}
					</WalkCardButton>
				</WalkCardHead>
				{walkItem.map(item => (
					<section key={item.id}>
						<p>Duration: {item.duration} h/m</p>
						<p>When started: {item.startTime}</p>
						<p>Date: {item.date}</p>
						<hr></hr>
					</section>
				))}
			</WalkCardContainer>
			{showForm && (
				<FormModal>
					<InputWalk addNewWalkItem={addNewWalkItem} addCounter={addCounter} />
				</FormModal>
			)}
			<h4>HISTORY</h4>
			{walkItem.map(item => (
				<section key={item.id}>
					<h2>Date: {item.date}</h2>
					<p>Duration: {item.duration} h/m</p>
					<p>When started: {item.startTime}</p>
					<hr></hr>
				</section>
			))}
		</>
	);
}

{
	/* <View>
                    {Categories.map(category => {
                         return category.type === 0 ?
                            (
                            <>
                                <View>
                                <Text> {category.category} </Text>
                                <View>
                                    <Text> Optional </Text>
                                </View>
                            </View>

                            { itemData.filter(product => product.menu_item_id === category.data_id).map(b => {
                                    return (<View key={b.id}>
                                        <View>
                                            <CheckBox
                                                disabled={false}
                                                value={checked[b.id]}
                                            />
                                            <Text>{b.name}</Text>
                                        </View>
                                        <View>
                                            <Text> $${b.price}</Text>
                                        </View>
                                    </View>)
                                })
                            }</>)
                       :
                    (<><View>
                        <Text> {category.category}  </Text>
                        <View>
                            <Text> REQUIRED </Text>
                        </View>
                    </View>
                    {itemData.filter(product => product.menu_item_id === category.data_id).map(b => {
                        return (<View >
                            <RadioButton.Group
                                key={b.id}
                                onValueChange={value => {  }} value={value}>
                                <View>
                                    <RadioButton.Item label={b.name}
                                        value={b}
                                    />
                                    <Text>RM {b.price}</Text>
                                </View>
                            </RadioButton.Group>
                        </View>)
                    })
                    }</>)
                })}
       </View > */
}
