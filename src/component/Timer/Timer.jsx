import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTime } from '../../features/skills/skillsSlice';

const Timer = () => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);
	const [stopTimer, setStopTimer] = useState(false);

	const dispatch = useDispatch();

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
		setStopTimer(true);
		dispatch(updateTime([1, seconds]));
	};

	useEffect(() => {
		if (stopTimer) return;
		const time = setInterval(() => counter(), 1000);
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
