import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exceriesDone } from '../../features/skills/skillsSlice';
import { selectUserAuth } from '../../features/user/usersSlice';

const Timer = ({ index }) => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);
	const [stopTimer, setStopTimer] = useState(false);

	const dispatch = useDispatch();
	const userAuth = useSelector(selectUserAuth);

	const counter = useCallback(() => {
		setSeconds((prev) => prev + 1);
		if (seconds === 59) {
			setMinutes((prev) => prev + 1);
			setSeconds(0);
		}
		if (minutes === 59) {
			setHours((prev) => prev + 1);
			setMinutes(0);
		}
	}, [seconds, minutes]);

	const stop = () => {
		console.log(index);
		setStopTimer(true);

		dispatch(exceriesDone({ index: index, time: { minutes: minutes, hours: hours }, userAuth: userAuth }));
	};

	useEffect(() => {
		if (stopTimer) return;
		const time = setInterval(() => counter(), 10);
		return () => clearInterval(time);
	}, [seconds, counter, stopTimer]);

	return (
		<div>
			{hours} : {minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}
			<button onClick={() => stop()}>Stop</button>
		</div>
	);
};

export default Timer;
