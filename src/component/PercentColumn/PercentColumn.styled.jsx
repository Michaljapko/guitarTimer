import styled from 'styled-components';

export const StyledColumn = styled.div`
	height: ${({ percent }) => percent}px;
	width: 30px;
	background: rgb(186, 109, 53);
	background: linear-gradient(180deg, rgba(186, 109, 53, 1) 0%, rgba(179, 93, 74, 1) 100%);
`;
