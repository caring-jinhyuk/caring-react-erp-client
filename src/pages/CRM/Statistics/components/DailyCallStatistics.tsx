import React, { FC, useState } from 'react';
import { CallStatistic } from '../../../../quries/useGetConsultListAll';
import { Calendar as DatePicker } from 'react-date-range';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Popovers from '../../../../components/bootstrap/Popovers';
import Button from '../../../../components/bootstrap/Button';
import moment from 'moment';

interface DailyCallStatisticsProps {
	callStatistic: CallStatistic;
}

const DailyCallStatistics: FC<DailyCallStatisticsProps> = ({ callStatistic }) => {
	const [date, setDate] = useState(new Date());
	return (
		<>
			<Card>
				<CardHeader>
					<CardLabel icon='ReceiptLong'>
						<CardTitle tag='h4' className='h5'>
							오늘의 콜 통계
						</CardTitle>
						<CardSubTitle tag='h5' className='h6'>
							Reports
						</CardSubTitle>
					</CardLabel>
					<CardActions>
						<Popovers
							desc={
								<DatePicker
									onChange={(item) => setDate(item)}
									date={date}
									color={process.env.REACT_APP_PRIMARY_COLOR}
								/>
							}
							placement='bottom-start'
							className='mw-100'
							trigger='click'>
							<Button color='light'>{moment(date).format('MMM Do')}</Button>
						</Popovers>
					</CardActions>
				</CardHeader>
			</Card>
		</>
	);
};

export default DailyCallStatistics;
