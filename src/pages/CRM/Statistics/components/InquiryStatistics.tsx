import React, { FC } from 'react';
import { CallData } from '../../../../models/CallData';
import Popovers from '../../../../components/bootstrap/Popovers';
import { ADD_INQUIRY_LIST } from '../../../../constants/selectValues';

type InquiryStatisticsProps = {
	callStatistic: CallData;
};

const InquiryStatistics: FC<InquiryStatisticsProps> = ({ callStatistic }) => {
	return (
		<>
			<table className='table table-modern'>
				<thead>
					<tr>
						<th>타급여</th>
						<th>call</th>
					</tr>
				</thead>
				<tbody>
					{ADD_INQUIRY_LIST.map((item, index) => (
						<tr key={item}>
							<td>{item}</td>
							<td>
								{item === '기타' ? (
									<Popovers title={callStatistic.todayAddInquiryEtc} trigger={'click'}>
										<div>{callStatistic.todayAddInquiryCall[index]}</div>
									</Popovers>
								) : (
									callStatistic.todayAddInquiryCall[index]
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default InquiryStatistics;
