import PercentColumn from '../PercentColumn';
import Button from '../Button';
import Timer from '../Timer/Timer';

import {
	StyledCard,
	StyledFooterCard,
	StyledHours,
	StyledSkill,
	StyledTextBold,
	StyledTittle,
	StyledWrapper,
	StyledButtonWrapper,
} from './SkillCard.styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectPercent, setIsPractice, selectIsPractice } from '../../features/skills/skillsSlice';
import { TEXT } from '../../store/language/pl';

const SkillCard = ({ skill, index }) => {
	const dispatch = useDispatch();

	const percent = useSelector(selectPercent(index));
	const isPractice = useSelector(selectIsPractice);

	if (skill.practiceNow)
		return (
			<StyledSkill>
				<PercentColumn percent={percent} />
				<StyledTittle> {skill.name}</StyledTittle>
				<StyledWrapper>
					<Timer index={index} />
				</StyledWrapper>
			</StyledSkill>
		);

	if (isPractice) return;

	return (
		<StyledSkill>
			<PercentColumn percent={percent} />
			<StyledTittle> {skill.name}</StyledTittle>
			<StyledWrapper>
				<StyledCard>
					<StyledHours>
						{skill.time.hours}:{skill.time.minutes < 10 ? '0' + skill.time.minutes : skill.time.minutes}h
					</StyledHours>
					<p>{TEXT.allTime}</p>
				</StyledCard>
				<StyledFooterCard>
					<p>
						{TEXT.session}:<StyledTextBold> {skill.takes}</StyledTextBold>
					</p>
					<p>
						{TEXT.longestSession}:
						<StyledTextBold>
							{skill.longestTake.hours}:{skill.longestTake.minutes < 10 ? '0' + skill.longestTake.minutes : skill.longestTake.minutes}h
						</StyledTextBold>
					</p>
				</StyledFooterCard>
				<StyledButtonWrapper>
					<Button
						action={() => {
							dispatch(setIsPractice(index));
						}}
					>
						{TEXT.start}
					</Button>
				</StyledButtonWrapper>
			</StyledWrapper>
		</StyledSkill>
	);
};

export default SkillCard;
