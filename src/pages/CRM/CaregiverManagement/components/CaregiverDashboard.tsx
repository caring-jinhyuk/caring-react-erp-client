import React, { useEffect } from 'react';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import Spinner from '../../../../components/bootstrap/Spinner';
import { useGetCaregiverAllList } from '../../../../quries/useCaregiverAllList';
import { useQueryClient } from '@tanstack/react-query';
import Button from '../../../../components/bootstrap/Button';
import { CITY } from '../../../../constants/address';

const CaregiverDashboard = () => {
	const { data, isFetching } = useGetCaregiverAllList();
	const queryClient = useQueryClient();

	useEffect(() => {}, [data, isFetching]);

	const refresh = async () => {
		await queryClient.invalidateQueries(['caregiverAllList']);
	};
	return (
		<>
			<Card>
				<CardBody style={{ height: 500 }}>
					{!isFetching && data ? (
						<div>
							<div className='row'>
								<div className='col-11'>
									<div>현재요양보호사</div>
									<div>{data.giverCount}명</div>
								</div>
								<div className='col-1'>
									<Button onClick={refresh} color='success' icon={'Refresh'} />
								</div>
							</div>
							<Chart
								series={[
									{
										data: data.statistics,
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
								height={350}
							/>
							<div>
								<div>오늘 증가한 요양보호사: {data.todayGiverCount}명</div>
								<div>
									어제 최종 요양보호사 수(증가 수): {data.giverCount - data.todayGiverCount}명(↑
									{data.yesterdayGiverCount})
								</div>
							</div>
						</div>
					) : (
						<Spinner color={'secondary'} size={100} className='spinner' />
					)}
				</CardBody>
			</Card>
		</>
	);
};

export default CaregiverDashboard;
