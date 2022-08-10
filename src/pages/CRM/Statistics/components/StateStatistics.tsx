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

type StateStatisticsProps = {
	callStatistic: CallData;
};

const StateStatistics: FC<StateStatisticsProps> = ({ callStatistic }) => {
	const [showDataType, setShowDataType] = useState<GraphType>(GraphType.TABLE);
	return (
		<>
			<Card>
				<CardHeader>
					<CardLabel className='h6'>
						<CardTitle>상태</CardTitle>
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
						<table className='table table-moder'>
							<tbody>
								{callStatistic.stateList.map((item, index) => (
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
									data: callStatistic.todayStateCall,
								},
							]}
							options={{
								chart: {
									height: 600,
									type: 'bar',
								},
								xaxis: {
									categories: callStatistic.stateList,
								},
								plotOptions: {
									bar: {
										horizontal: true,
									},
								},
								colors: [String(process.env.REACT_APP_INFO_COLOR)],
							}}
							type={'bar'}
							height={600}
						/>
					)}
				</CardBody>
			</Card>
		</>
	);
};

export default StateStatistics;
