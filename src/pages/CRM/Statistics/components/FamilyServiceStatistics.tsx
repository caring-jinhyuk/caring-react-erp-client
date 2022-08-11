import React, { FC, useState } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import { CallData } from '../../../../models/CallData';
import Chart from '../../../../components/extras/Chart';
import { GraphType } from '../statics/StatisticsStatics';

interface FamilyServiceStatisticsProps {
	callStatistic: CallData;
}

const FamilyServiceStatistics: FC<FamilyServiceStatisticsProps> = ({ callStatistic }) => {
	const [showDataType, setShowDataType] = useState<GraphType>(GraphType.TABLE);

	return (
		<>
			<Card shadow='sm'>
				<CardHeader>
					<CardLabel className='h6'>
						<CardTitle>가족 서비스</CardTitle>
					</CardLabel>
					<CardActions>
						<Button
							icon={showDataType === GraphType.TABLE ? 'BarChart' : 'TableChart'}
							color='info'
							onClick={() =>
								setShowDataType(showDataType === GraphType.TABLE ? GraphType.BAR : GraphType.TABLE)
							}
						/>
					</CardActions>
				</CardHeader>
				<CardBody>
					{showDataType === GraphType.TABLE && (
						<table className='table table-modern'>
							<thead>
								<tr>
									<th>상태</th>
									<th>call</th>
									<th>이관</th>
									<th>신규</th>
									<th>모름</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>가족진행중</td>
									<td>{callStatistic.todayStateCall[0]}</td>
									<td>{callStatistic.experienceCheckList[2][0]}</td>
									<td>{callStatistic.experienceCheckList[2][1]}</td>
									<td>{callStatistic.experienceCheckList[2][2]}</td>
								</tr>
								<tr>
									<td>가족진행중(자격증X)</td>
									<td>{callStatistic.todayStateCall[1]}</td>
									<td>{callStatistic.experienceCheckList[4][0]}</td>
									<td>{callStatistic.experienceCheckList[4][1]}</td>
									<td>{callStatistic.experienceCheckList[4][2]}</td>
								</tr>
								<tr>
									<td>가족서비스시작</td>
									<td>{callStatistic.todayStateCall[5]}</td>
									<td>{callStatistic.experienceCheckList[3][0]}</td>
									<td>{callStatistic.experienceCheckList[3][1]}</td>
									<td>{callStatistic.experienceCheckList[3][2]}</td>
								</tr>
								<tr>
									<td>합계</td>
									<td>
										{callStatistic.todayStateCall[0] +
											callStatistic.todayStateCall[1] +
											callStatistic.todayStateCall[5]}
									</td>
									<td>
										{callStatistic.experienceCheckList[2][0] +
											callStatistic.experienceCheckList[3][0] +
											callStatistic.experienceCheckList[4][0]}
									</td>
									<td>
										{callStatistic.experienceCheckList[2][1] +
											callStatistic.experienceCheckList[3][1] +
											callStatistic.experienceCheckList[4][1]}
									</td>
									<td>
										{callStatistic.experienceCheckList[2][2] +
											callStatistic.experienceCheckList[3][2] +
											callStatistic.experienceCheckList[4][2]}
									</td>
								</tr>
							</tbody>
						</table>
					)}
					{showDataType === GraphType.BAR && (
						<Chart
							series={[
								{
									name: '가족진행중',
									data: [
										callStatistic.todayStateCall[0],
										callStatistic.experienceCheckList[2][0],
										callStatistic.experienceCheckList[2][1],
										callStatistic.experienceCheckList[2][2],
									],
								},
								{
									name: '가족진행중(자격증X)',
									data: [
										callStatistic.todayStateCall[1],
										callStatistic.experienceCheckList[3][0],
										callStatistic.experienceCheckList[3][1],
										callStatistic.experienceCheckList[3][2],
									],
								},
								{
									name: '가족서비스시작',
									data: [
										callStatistic.todayStateCall[5],
										callStatistic.experienceCheckList[4][0],
										callStatistic.experienceCheckList[4][1],
										callStatistic.experienceCheckList[4][2],
									],
								},
							]}
							options={{
								chart: {
									type: 'bar',
									height: 350,
									stacked: true,
								},
								dataLabels: {
									enabled: true,
								},
								xaxis: {
									categories: ['Call', '이관', '신규', '무관'],
								},
							}}
							type='bar'
							height={350}
						/>
					)}
				</CardBody>
			</Card>
		</>
	);
};

export default FamilyServiceStatistics;
