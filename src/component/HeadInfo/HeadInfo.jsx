import { useSelector } from 'react-redux';
import { selectAllTime, selectAllTakes, selectIsPracticeToday } from '../../features/skills/skillsSlice';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { StyledHeadInfo, StyledSmallText, StyledCard } from './HeadInfo.styled';

const HeadInfo = () => {
	const allTime = useSelector(selectAllTime);
	const allTakes = useSelector(selectAllTakes);
	const isPracticeToday = useSelector(selectIsPracticeToday);
	return (
		<StyledHeadInfo>
		<p></p>
			<StyledCard>
				<p>
					{allTime.horus}:{allTime.minutes}h
				</p>
				<StyledSmallText>Łącznie spędziłeś godzin</StyledSmallText>
			</StyledCard>
			<StyledCard>
				<p>{allTakes}</p>
				<StyledSmallText>Wszystkich sesji</StyledSmallText>
			</StyledCard>
			<StyledCard>
				{isPracticeToday ? <AiOutlineLike /> : <AiOutlineDislike />}
				<StyledSmallText>Ćwiczyłeś dziś?</StyledSmallText>
			</StyledCard>
		</StyledHeadInfo>
	);
};

export default HeadInfo;
