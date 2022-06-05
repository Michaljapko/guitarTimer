import styled, { css }  from 'styled-components';


const flexMixin = () => css`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const StyledSkill = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	margin: 1rem;
	padding: 1.5rem;
	min-width: 9rem;
	height: 20rem;
`;

export const StyledTittle = styled.p`
	position: relative;
	bottom: -0.8rem;
	z-index: 1;
	margin: 0.3rem 0;
	font-size: 1rem;
	letter-spacing: 2px;
	font-weight: bold;
	text-shadow: 1px 1px 3px black;
`;
export const StyledWrapper = styled.div`
	position: relative;
	${flexMixin()}
	padding: 1rem;
	border-radius: 5px;
	width: 100%;
	background: ${({ theme }) => theme.palleteColor.backgroundWrapper};
	line-height: 1.6rem;
	color: ${({ theme }) => theme.palleteColor.textColorDark};
`;
export const StyledFooterCard = styled.div`
	${flexMixin()}
	margin: 0.5rem;
`;
export const StyledCard = styled.div`
	${flexMixin()}
	border-left: 5px solid #f04d58;
	padding: 0 0.5rem;
	margin: 0.5rem;
`;

export const StyledHours = styled.p`
	font-size: 1.2rem;
	font-weight: bold;
	color: ${({ theme }) => theme.palleteColor.textColor};
`;

export const StyledTextBold = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.palleteColor.textColor};
`;

export const StyledButtonWrapper = styled.div`
	position: absolute;
	left: 0;
	bottom: -2rem;
	width: 100%;
`;
