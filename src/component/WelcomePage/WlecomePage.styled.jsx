import styled from 'styled-components';

export const StyledWrapper = styled.div`
	padding: 2rem;
	margin: 1rem;
	border-radius: 10px;
	max-width: 500px;
	background: ${({ theme }) => theme.palleteColor.backgroundWrapper};
`;

export const StyledTitle = styled.h1`
	margin: 1rem;
	letter-spacing: 2px;
	text-transform: uppercase;
`;
export const Styledh3 = styled.h3``;
export const Styledh4 = styled.h4`
	color: ${({ theme }) => theme.palleteColor.textColorDark};
	margin: 1rem;
`;
