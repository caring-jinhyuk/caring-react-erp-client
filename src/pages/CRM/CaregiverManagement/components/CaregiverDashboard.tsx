import React, { useEffect, useState } from 'react';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import { Caregiver, CaregiverControllerService } from '../../../../services/openApi';
import moment from 'moment';
import Spinner from '../../../../components/bootstrap/Spinner';
import { selector, useRecoilValue } from 'recoil';
import { v1 } from 'uuid';

interface DashboardData {
	todayGiverCount: number;
	yesterdayGiverCount: number;
	giverCount: number;
	statistics: number[];
}

const getCaregiverDashboard = selector<DashboardData>({
	key: `${v1()}`,
	get: async () => {
		const response = await CaregiverControllerService.getCaregiverAllListUsingGet();
		const giverCount = response.length;
		const statisticsCity: Array<number> = new Array(17).fill(0);
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
		let todayGiverCount = 0;
		let yesterdayGiverCount = 0;

		for (let i = 0; i < response.length; i++) {
			let create = new Date(response[i].createdAt!);
			if (response[i] != null) {
				for (let city = 0; city < cityList.length; city++) {
					if (response[i].city === cityList[city]) {
						statisticsCity[city]++;
						break;
					}
				}
				if (create.toISOString().substring(0, 10) === new Date().toISOString().substring(0, 10)) {
					todayGiverCount++;
				}
				if (
					create.toISOString().substring(0, 10) ===
					moment().subtract(1, 'days').format('YYYY-MM-DD')
				) {
					yesterdayGiverCount++;
				}
			}
		}
		return {
			todayGiverCount: todayGiverCount,
			yesterdayGiverCount: yesterdayGiverCount,
			giverCount: giverCount,
			statistics: statisticsCity,
		};
	},
});

const CaregiverDashboard = () => {
	const dashboardData: DashboardData = useRecoilValue(getCaregiverDashboard);
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
	return (
		<>
			<Card>
				<CardBody style={{ height: 500 }}>
					{dashboardData != null ? (
						<div>
							<div>
								<div>현재요양보호사</div>
								<div>{dashboardData.giverCount}명</div>
							</div>
							<Chart
								series={[
									{
										data: dashboardData.statistics,
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
								<div>오늘 증가한 요양보호사: {dashboardData.todayGiverCount}명</div>
								<div>
									어제 최종 요양보호사 수(증가 수):{' '}
									{dashboardData.giverCount - dashboardData.todayGiverCount}명(↑
									{dashboardData.yesterdayGiverCount})
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
