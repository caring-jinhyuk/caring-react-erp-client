import React, { FC } from 'react';
import { CallData } from '../../../../models/CallData';
import { COUNSELORS } from '../../../../constants/selectValues';

type CounselorStatisticsProps = {
	callStatistic: CallData;
};

const CounselorStatistics: FC<CounselorStatisticsProps> = ({ callStatistic }) => {
	return (
		<>
			<table className='table table-modern'>
				<thead>
					<tr>
						<th>이름</th>
						<th>call</th>
						<th>new</th>
						<th>re</th>
						<th>진행중</th>
						<th>진행중_자격증X</th>
						<th>완료</th>
						<th>부재</th>
						<th>기타</th>
					</tr>
				</thead>
				<tbody>
					{COUNSELORS.map((counselor, index) => (
						<tr key={counselor}>
							<td>{counselor}</td>
							<td>{callStatistic.counselorCallDetail[index][0]}</td>
							<td>{callStatistic.todayCounselorCallList[index][0]}</td>
							<td>{callStatistic.todayCounselorCallList[index][1]}</td>
							<td>{callStatistic.counselorCallDetail[index][2]}</td>
							<td>{callStatistic.counselorCallDetail[index][3]}</td>
							<td>{callStatistic.counselorCallDetail[index][4]}</td>
							<td>{callStatistic.counselorCallDetail[index][5]}</td>
							<td>{callStatistic.counselorCallDetail[index][6]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default CounselorStatistics;
