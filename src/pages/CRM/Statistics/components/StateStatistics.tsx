import React, { FC, useState } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import { CallData } from '../../../../models/CallData';
import { GraphType } from '../statics/StatisticsStatics';
import Button from '../../../../components/bootstrap/Button';
import Chart from '../../../../components/extras/Chart';
import StateStatisticsTableRow from './StateStatisticsTableRow';
import { STATE_LIST } from '../../../../statics/selectValues';

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
						<table className='table table-modern'>
							<tbody>
								{STATE_LIST.map((item, index) => (
									<StateStatisticsTableRow
										key={item}
										callStatistic={callStatistic}
										text={item}
										index={index}
									/>
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
									categories: STATE_LIST,
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
