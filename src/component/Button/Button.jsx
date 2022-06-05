import { StyledButton } from './Button.styled';

const Button = ({ action, children }) => {
	return <StyledButton onClick={action}>{children}</StyledButton>;
};

export default Button;
