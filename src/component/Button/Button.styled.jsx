import styled from 'styled-components';

export const StyledButton = styled.div`
	border: none;
	border-radius: 10px;
	padding: 0.7rem 1rem;
	font-size: 0.8rem;
	background: ${({ theme }) => theme.palleteColor.buttonBg};
	cursor: pointer;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: ${({ theme }) => theme.palleteColor.buttonColor};
`;
