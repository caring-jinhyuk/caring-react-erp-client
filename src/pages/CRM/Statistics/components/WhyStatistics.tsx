import React, { FC } from 'react';
import { CallData } from '../../../../models/CallData';
import Popovers from '../../../../components/bootstrap/Popovers';
import { WHY_LIST } from '../../../../constants/selectValues';

type WhyStatisticsProps = {
	callStatistic: CallData;
};

const WhyStatistics: FC<WhyStatisticsProps> = ({ callStatistic }) => {
	return (
		<>
			<table className='table table-modern'>
				<thead>
					<tr>
						<th>선택이유</th>
						<th>call</th>
					</tr>
				</thead>
				<tbody>
					{WHY_LIST.map((item, index) => (
						<tr key={item}>
							<td>{item}</td>
							<td>
								{item === '기타' ? (
									<Popovers title={callStatistic.todayChoiceReasonEtc} trigger={'click'}>
										<div>{callStatistic.todayChoiceReasonCall[index]}</div>
									</Popovers>
								) : (
									callStatistic.todayChoiceReasonCall[index]
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default WhyStatistics;
