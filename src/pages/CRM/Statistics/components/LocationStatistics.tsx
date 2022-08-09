import React, { FC } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import { CallData } from '../../../../models/CallData';
import Button from '../../../../components/bootstrap/Button';

type LocationStatisticsProps = {
	callStatistic: CallData;
};

const LocationStatistics: FC<LocationStatisticsProps> = ({ callStatistic }) => {
	return (
		<Card>
			<CardHeader>
				<CardLabel className='h6'>
					<CardTitle>지역</CardTitle>
				</CardLabel>
				{/*<CardActions></CardActions>*/}
			</CardHeader>
			<CardBody>
				<table className='table table-modern'>
					<tbody>
						{callStatistic.cityList.map((item, index) => (
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
			</CardBody>
		</Card>
	);
};

export default LocationStatistics;
