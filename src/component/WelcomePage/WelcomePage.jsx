import { TEXT } from '../../store/language/pl';
import { StyledWrapper, Styledh4, StyledTitle } from './WlecomePage.styled';

const WelcomePage = () => {
	return (
		<StyledWrapper>
			<StyledTitle>{TEXT.title}</StyledTitle>
			<h3>{TEXT.description} </h3>
			<Styledh4>{TEXT.descriptionTwo}</Styledh4>
		</StyledWrapper>
	);
};
export default WelcomePage;
