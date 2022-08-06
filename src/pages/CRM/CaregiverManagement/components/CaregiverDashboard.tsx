import React from 'react';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import Spinner from '../../../../components/bootstrap/Spinner';
import { useGetCaregiverAllList } from '../../../../quries/useCaregiverAllList';
import { useQueryClient } from '@tanstack/react-query';
import Button from '../../../../components/bootstrap/Button';

const CaregiverDashboard = () => {
	const dashboardData = useGetCaregiverAllList();
	const queryClient = useQueryClient();
	const cityList: string[] = [
		'경기',
		'서울',
		'부산',
		'인천',
		'경남',
		'대구',
		'경북',
		'충남',
		'대전',
		'광주',
		'전북',
		'울산',
		'충북',
		'전남',
		'강원',
		'제주',
		'세종',
	];

	const refresh = async () => {
		await queryClient.invalidateQueries(['caregiverAllList']);
	};
	return (
		<>
			<Card>
				<CardBody style={{ height: 500 }}>
					{dashboardData.contents != null ? (
						<div>
							<div>
								<div>현재요양보호사</div>
								<div>{dashboardData.contents.giverCount}명</div>
							</div>
							<Chart
								series={[
									{
										data: dashboardData.contents.statistics,
									},
								]}
								options={{
									chart: {
										height: 350,
										type: 'bar',
									},
									xaxis: {
										categories: cityList,
									},
									plotOptions: {
										bar: {
											horizontal: false,
										},
									},
								}}
								type={'bar'}
								height={350}
							/>
							<div>
								<div>오늘 증가한 요양보호사: {dashboardData.contents.todayGiverCount}명</div>
								<div>
									어제 최종 요양보호사 수(증가 수):{' '}
									{dashboardData.contents.giverCount - dashboardData.contents.todayGiverCount}명(↑
									{dashboardData.contents.yesterdayGiverCount})
								</div>
							</div>
						</div>
					) : (
						<Spinner color={'secondary'} size={100} className='spinner' />
					)}
					<Button onClick={refresh}>리프레쉬</Button>
				</CardBody>
			</Card>
		</>
	);
};

export default CaregiverDashboard;
