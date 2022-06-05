import styled from 'styled-components';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

export const StyledHeadInfo = styled.div`
	display: flex;
	flex-direction: row;
	padding: 2rem;
	background: ${({ theme }) => theme.palleteColor.backgroundWrapper};
	font-weight: bold;
	font-size: 1.5rem;
	margin: 2rem 0;
`;
export const StyledWelcome = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem;
	font-size: 1rem;
	font-weight: bold;
`;
export const StyledSmallText = styled.p`
	font-size: 0.8rem;
	font-weight: normal;
	color: ${({ theme }) => theme.palleteColor.textColorDark}; ;
`;
export const StyledCard = styled.div`
	margin: 0 2rem;
`;

export const StyledDone = styled(AiOutlineLike)`
	color: ${({ theme }) => theme.palleteColor.done};
`;

export const StyledNotDone = styled(AiOutlineDislike)`
	color: ${({ theme }) => theme.palleteColor.notDone};
`;
