import { StyledColumn, StyledPercent } from './PercentColumn.styled';

const PercentColumn = ({ percent }) => {
	return (
		<>
			<StyledPercent>{Math.floor(percent)}%</StyledPercent>
			<StyledColumn percent={percent} />
		</>
	);
};

export default PercentColumn;
