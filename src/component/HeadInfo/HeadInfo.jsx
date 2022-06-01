import { useSelector } from 'react-redux';
import { selectAllHours, selectAllTakes } from '../../features/skills/skillsSlice';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { StyledHeadInfo, StyledSmallText, StyledCard } from './HeadInfo.styled';

const HeadInfo = () => {
	const allHours = useSelector(selectAllHours);
	const allTakes = useSelector(selectAllTakes);
	return (
		<StyledHeadInfo>
			<StyledCard>
				<p>{allHours}h</p>
				<StyledSmallText>Łącznie spędziłeś godzin</StyledSmallText>
			</StyledCard>
			<StyledCard>
				<p>{allTakes}</p>
				<StyledSmallText>Wszystkich sesji</StyledSmallText>
			</StyledCard>
			<StyledCard>
				<AiOutlineLike />
				<AiOutlineDislike />
				<StyledSmallText>Ćwiczyłeś dziś?</StyledSmallText>
			</StyledCard>
		</StyledHeadInfo>
	);
};

export default HeadInfo;
