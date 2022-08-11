import React, { FC, useState } from 'react';
import { CallData } from '../../../../models/CallData';
import { INFLOW_LIST } from '../../../../constants/selectValues';

type StateStatisticsTableRowProps = {
	callStatistic: CallData;
	text: string;
	index: number;
};

const StateStatisticsTableRow: FC<StateStatisticsTableRowProps> = ({
	callStatistic,
	text,
	index,
}) => {
	const [showEtc, setShowEtc] = useState<boolean>(false);
	return (
		<>
			<tr onClick={() => setShowEtc(!showEtc)}>
				<td>{text}</td>
				<td>{callStatistic.todayStateCall[index]}</td>
			</tr>
			{showEtc &&
				callStatistic.stateComeList[index].map((item, i) => (
					<tr key={i}>
						<td style={{ color: 'red' }}>{INFLOW_LIST[i]}</td>
						<td style={{ color: 'red' }}>{item}</td>
					</tr>
				))}
		</>
	);
};

export default StateStatisticsTableRow;
