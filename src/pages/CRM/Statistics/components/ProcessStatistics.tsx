import React, { FC, useState } from 'react';
import { CallData } from '../../../../models/CallData';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import { GraphType } from '../constants/StatisticsConstants';
import Button from '../../../../components/bootstrap/Button';
import { CITY } from '../../../../constants/address';
import Chart from '../../../../components/extras/Chart';

type ProcessStatisticsProps = {
	callStatistic: CallData;
};

const ProcessStatistics: FC<ProcessStatisticsProps> = ({ callStatistic }) => {
	const [showDataType, setShowDataType] = useState<GraphType>(GraphType.TABLE);

	return (
		<>
			<Card>
				<CardHeader>
					<CardLabel className='h6'>
						<CardTitle>고객 상태</CardTitle>
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
							<tbody>
								{callStatistic.progressList.map((item, index) => (
									<tr key={item}>
										<td>{item}</td>
										<td>{callStatistic.progressCheckList[1][index]}</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
					{showDataType === GraphType.BAR && (
						<Chart
							series={[
								{
									data: callStatistic.progressCheckList[1],
								},
							]}
							options={{
								chart: {
									height: 350,
									type: 'bar',
								},
								xaxis: {
									categories: callStatistic.progressList,
								},
								plotOptions: {
									bar: {
										horizontal: false,
									},
								},
								colors: [String(process.env.REACT_APP_INFO_COLOR)],
							}}
							type={'bar'}
							height={450}
						/>
					)}
				</CardBody>
			</Card>
		</>
	);
};

export default ProcessStatistics;
