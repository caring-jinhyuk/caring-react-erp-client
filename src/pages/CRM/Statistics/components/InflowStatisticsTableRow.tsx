import React, { FC, useState } from 'react';
import { CallData } from '../../../../models/CallData';
import { STATE_LIST } from '../../../../constants/selectValues';

type InflowStatisticsTableRowProps = {
	callStatistic: CallData;
	text: string;
	index: number;
};

const InflowStatisticsTableRow: FC<InflowStatisticsTableRowProps> = ({
	callStatistic,
	text,
	index,
}) => {
	const [showEtc, setShowEtc] = useState<boolean>(false);
	return (
		<>
			<tr onClick={() => setShowEtc(!showEtc)}>
				<td>{text}</td>
				<td>{callStatistic.todayItemCall[index]}</td>
			</tr>
			{showEtc &&
				callStatistic.comeStateList[index].map((item, i) => (
					<tr key={i}>
						<td style={{ color: 'red' }}>{STATE_LIST[i]}</td>
						<td style={{ color: 'red' }}>{item}</td>
					</tr>
				))}
		</>
	);
};

export default InflowStatisticsTableRow;
