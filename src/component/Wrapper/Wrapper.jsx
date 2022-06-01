import Skill from '../Skill';


import { selectSkills } from '../../features/skills/skillsSlice';

import { useSelector } from 'react-redux';
import { StyledWrapper } from './Wrapper.styled';

const Wrapper = () => {
	const skills = useSelector(selectSkills);

	return (
		<StyledWrapper>
			{skills.map((skill, index) => (
				<Skill key={skill.name} index={index} skill={skill} />
			))}
		
		</StyledWrapper>
	);
};

export default Wrapper;
