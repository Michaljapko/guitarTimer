import styled from 'styled-components';

export const StyledGlobalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	font-size: 0.8rem;
	text-align: center;
	color: ${({ theme }) => theme.palleteColor.textColor}; ;
`;
