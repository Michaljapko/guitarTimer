import useTimer from '../../hooks/useTimer';
import { useDispatch, useSelector } from 'react-redux';
import { exceriesDone } from '../../features/skills/skillsSlice';
import { selectUserAuth } from '../../features/user/usersSlice';
import { ImPause2, ImPlay3, ImCheckmark } from 'react-icons/im';
import { StyledTimerButton, StyledTimerWrap } from './Timer.styled';

const Timer = ({ index }) => {
	const { hours, minutes, seconds, stopTimer, setStopTimer } = useTimer();
	const dispatch = useDispatch();
	const userAuth = useSelector(selectUserAuth);

	const stop = () => {
		setStopTimer(true);
	};
	const start = () => {
		setStopTimer(false);
	};
	const done = () => {
		setStopTimer(true);
		dispatch(exceriesDone({ index: index, time: { minutes: minutes, hours: hours }, userAuth: userAuth }));
	};

	return (
		<StyledTimerWrap>
			{hours} : {minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}
			<div>
				{stopTimer ? (
					<StyledTimerButton onClick={() => start()}>
						<ImPlay3 />
					</StyledTimerButton>
				) : (
					<StyledTimerButton onClick={() => stop()}>
						<ImPause2 />
					</StyledTimerButton>
				)}
				<StyledTimerButton onClick={() => done()}>
					<ImCheckmark />
				</StyledTimerButton>
			</div>
		</StyledTimerWrap>
	);
};

export default Timer;
