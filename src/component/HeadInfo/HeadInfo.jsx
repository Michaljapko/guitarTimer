import { useSelector } from 'react-redux';
import { StyledHeadInfo, StyledSmallText, StyledCard, StyledWelcome, StyledDone, StyledNotDone } from './HeadInfo.styled';
import { selectAllTime, selectAllTakes, selectIsPracticeToday } from '../../features/skills/skillsSlice';
import { selectUserName } from '../../features/user/usersSlice';
import Authentication from '../Authentication';
import { TEXT } from '../../store/language/pl';

const HeadInfo = () => {
	const allTime = useSelector(selectAllTime);
	const allTakes = useSelector(selectAllTakes);
	const userName = useSelector(selectUserName);
	const isPracticeToday = useSelector(selectIsPracticeToday);

	return (
		<>
			<StyledWelcome>
				<p>
					{TEXT.welcome} {userName}
				</p>
				<Authentication />
			</StyledWelcome>
			<StyledHeadInfo>
				<StyledCard>
					<p>
						{allTime.horus}:{allTime.minutes}h
					</p>
					<StyledSmallText>{TEXT.timeTotal}</StyledSmallText>
				</StyledCard>
				<StyledCard>
					<p>{allTakes}</p>
					<StyledSmallText>{TEXT.allSesion}</StyledSmallText>
				</StyledCard>
				<StyledCard>
					{isPracticeToday ? <StyledDone /> : <StyledNotDone />}
					<StyledSmallText>{TEXT.exceriesToday}</StyledSmallText>
				</StyledCard>
			</StyledHeadInfo>
		</>
	);
};

export default HeadInfo;
