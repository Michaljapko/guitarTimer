import styled from 'styled-components';

export const StyledPercent = styled.div`
	color: ${({ theme }) => theme.palleteColor.buttonColor};
	font-weight: bold;
`;

export const StyledColumn = styled.div`
	border-radius: 5px;
	height: ${({ percent }) => 10 + percent}px;
	width: 5px;
	background: ${({ theme }) => theme.palleteColor.percentColumn};
	transition: height 0.2s;
`;
