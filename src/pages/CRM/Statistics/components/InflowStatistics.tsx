import React, { FC, useState } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import { CallData } from '../../../../models/CallData';
import { GraphType } from '../constants/StatisticsConstants';
import Button from '../../../../components/bootstrap/Button';
import Chart from '../../../../components/extras/Chart';

type InflowStatisticsProps = {
	callStatistic: CallData;
};

const InflowStatistics: FC<InflowStatisticsProps> = ({ callStatistic }) => {
	const [showDataType, setShowDataType] = useState<GraphType>(GraphType.TABLE);
	return (
		<>
			<Card>
				<CardHeader>
					<CardLabel className='h6'>
						<CardTitle>유입매체</CardTitle>
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
								{callStatistic.inflowList.map((item, index) => (
									<tr key={item}>
										<td>{item}</td>
										<td>{callStatistic.todayStateCall[index]}</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
					{showDataType === GraphType.BAR && (
						<Chart
							series={[
								{
									data: callStatistic.todayStateCall.slice(0, callStatistic.inflowList.length),
								},
							]}
							options={{
								chart: {
									height: 350,
									type: 'bar',
								},
								xaxis: {
									categories: callStatistic.inflowList,
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

export default InflowStatistics;
