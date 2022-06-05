import { useState, useEffect, useCallback } from 'react';

const useTimer = () => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);
	const [stopTimer, setStopTimer] = useState(false);

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

	useEffect(() => {
		if (stopTimer) return;
		const time = setInterval(() => counter(), 1);
		return () => clearInterval(time);
	}, [seconds, counter, stopTimer]);

	return { hours, minutes, seconds, stopTimer, setStopTimer };
};

export default useTimer;
