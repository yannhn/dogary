// const [resultMinutes, setResultMinutes] = useState(0);
// const [result, setResult] = useState(0);

// const addTime = () => {
// 	const addHours = Number(enteredDuration.split(':')[0]);
// 	const addMinutes = Number(enteredDuration.split(':')[1]);
// 	if (resultMinutes < 60) {
// 		setResultHours(resultHours + 1);
// 		setResultMinutes(resultMinutes - resultMinutes);
// 	} else {
// 		setResultHours(resultHours + addHours);
// 		setResultMinutes(resultMinutes + addMinutes);
// 	}
// };

// const convertMinsToTime = mins => {
// 	let hours = Math.floor(mins / 60);
// 	let minutes = mins % 60;
// 	minutes = minutes < 10 ? '0' + minutes : minutes;
// 	return `${hours}hrs:${minutes}mins`;
// };
// const hrs = convertHoursToMinute(enteredDuration);
// const minutes = hrs * 60;

// function addTimes(t0, t1) {
// 	return timeFromMins(timeToMins(t0) + timeToMins(t1));
// }

// console.log(addTimes());
