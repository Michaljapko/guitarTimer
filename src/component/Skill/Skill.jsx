import PercentColumn from '../PercentColumn';
import { StyledCard, StyledFooterCard, StyledHours, StyledSkill, StyledTextBold, StyledTittle, StyledWrapper } from './Skill.styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectPercent, setIsPractice, selectIsPractice } from '../../features/skills/skillsSlice';
import Timer from '../Timer/Timer';

const Skill = ({ skill, index }) => {
	const dispatch = useDispatch();
	const percent = useSelector(selectPercent(index));
	const isPractice = useSelector(selectIsPractice);

	if (skill.practiceNow)
		return (
			<StyledSkill>
				<PercentColumn percent={percent} />
				<StyledTittle> {skill.name}</StyledTittle>
				<Timer index={index} />
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
					<p>Czas ogółem</p>
				</StyledCard>
				<StyledFooterCard>
					<p>
						Ilość sesji:<StyledTextBold> {skill.takes}</StyledTextBold>
					</p>
					<p>
						Najdłuższa sesja:{' '}
						<StyledTextBold>
							{skill.longestTake.hours}:{skill.longestTake.minutes < 10 ? '0' + skill.longestTake.minutes : skill.longestTake.minutes}h
						</StyledTextBold>
					</p>
					<p>
						Ostatnia sesja:<StyledTextBold> {skill.lastTake}</StyledTextBold>
					</p>
				</StyledFooterCard>

				<button
					onClick={() => {
						dispatch(setIsPractice(index));
					}}
				>
					Start Practice
				</button>
			</StyledWrapper>
		</StyledSkill>
	);
};

export default Skill;
