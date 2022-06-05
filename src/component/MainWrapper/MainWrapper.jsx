import SkillCard from '../SkillCard';

import { selectSkills } from '../../features/skills/skillsSlice';
import { useSelector } from 'react-redux';
import { StyledWrapper } from './MainWrapper.styled';

const MainWrapper = () => {
	const skills = useSelector(selectSkills);
	return (
		<StyledWrapper>
			{skills.map((skill, index) => (
				<SkillCard key={skill.name} index={index} skill={skill} />
			))}
		</StyledWrapper>
	);
};

export default MainWrapper;
