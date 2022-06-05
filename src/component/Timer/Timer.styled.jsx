import styled from 'styled-components';

export const StyledTimerWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 10rem;
	width: 100%;
	font-size: 1.5rem;
	font-weight: bold;
`;
export const StyledTimerButton = styled.button`
	background: none;
	font-size: 1.5rem;
	color: ${({ theme }) => theme.palleteColor.textColorDark};
	border: none;
	padding: 0.5rem;
`;
