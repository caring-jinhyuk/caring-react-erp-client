import React, { FC, useState } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import { CallData } from '../../../../models/CallData';
import Button from '../../../../components/bootstrap/Button';
import { GraphType } from '../constants/StatisticsConstants';
import Chart from '../../../../components/extras/Chart';
import { CITY } from '../../../../constants/address';

type LocationStatisticsProps = {
	callStatistic: CallData;
};

const LocationStatistics: FC<LocationStatisticsProps> = ({ callStatistic }) => {
	const [showDataType, setShowDataType] = useState<GraphType>(GraphType.TABLE);

	return (
		<Card>
			<CardHeader>
				<CardLabel className='h6'>
					<CardTitle>지역</CardTitle>
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
							{CITY.map((item, index) => (
								<tr key={item}>
									<td>{item}</td>
									<td>{callStatistic.todayCityCall[index]}</td>
								</tr>
							))}
							<tr>
								<td>모름</td>
								<td>{callStatistic.todayCityCall[17]}</td>
							</tr>
						</tbody>
					</table>
				)}
				{showDataType === GraphType.BAR && (
					<div>
						<Chart
							series={[
								{
									data: callStatistic.todayCityCall,
								},
							]}
							options={{
								chart: {
									height: 350,
									type: 'bar',
								},
								xaxis: {
									categories: CITY,
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
					</div>
				)}
			</CardBody>
		</Card>
	);
};

export default LocationStatistics;
