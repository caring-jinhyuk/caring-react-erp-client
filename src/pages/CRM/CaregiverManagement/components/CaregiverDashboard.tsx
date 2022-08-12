import React, { useEffect, useState } from 'react';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';
import Spinner from '../../../../components/bootstrap/Spinner';
import { useGetCaregiverAllList } from '../../../../quries/useCaregiverAllList';
import { useQueryClient } from '@tanstack/react-query';
import Button from '../../../../components/bootstrap/Button';
import { CITY } from '../../../../statics/address';
import { GraphType } from '../../Statistics/statics/StatisticsStatics';
import CaregiverDashboardTableRow from './CaregiverDashboardTableRow';
import { numberFormat, percent } from '../../../../helpers/helpers';

const CaregiverDashboard = () => {
	const { data, isFetching } = useGetCaregiverAllList();
	const [showDataType, setShowDataType] = useState<GraphType>(GraphType.TABLE);
	const queryClient = useQueryClient();

	const totalCaregiverNationwideCity: number[] = [
		97795, 81320, 33478, 26816, 34069, 21043, 29357, 22516, 18165, 14925, 21224, 7524, 13553, 20647,
		12416, 2886, 1699,
	];
	const totalCaregiverCount = 434041;

	useEffect(() => {}, [data, isFetching]);

	const refresh = async () => {
		await queryClient.invalidateQueries(['caregiverAllList']);
	};

	return (
		<>
			<Card>
				<CardBody style={{ height: 580 }}>
					{!isFetching && data ? (
						<div>
							<div className='d-flex flex-row justify-content-between'>
								<Button
									onClick={() =>
										setShowDataType(
											showDataType === GraphType.TABLE ? GraphType.BAR : GraphType.TABLE,
										)
									}
									color='info'
									icon={showDataType === GraphType.TABLE ? 'BarChart' : 'TableChart'}
								/>
								<Button onClick={refresh} color='success' icon={'Refresh'} />
							</div>

							<div className='row mt-2'>
								<div className='col-2'>
									<Card>
										<CardBody>
											<div>
												<h5>전국 요양보호사</h5>
											</div>
											<div>{numberFormat(totalCaregiverCount)}명</div>
											<div>
												<b>({percent(data.giverCount, totalCaregiverCount)}%)</b>
												확보
											</div>
										</CardBody>
									</Card>
									<Card>
										<CardBody>
											<div>
												<h5>케어링 요양보호사</h5>
											</div>
											<div>{numberFormat(data.giverCount)}명</div>
										</CardBody>
									</Card>
								</div>
								<div className='col-10'>
									{showDataType === GraphType.TABLE && (
										<div className='row'>
											<div className='col-6'>
												<table className='table table-modern'>
													<thead>
														<tr>
															<td></td>
															<td>전체</td>
															<td>케어링</td>
														</tr>
													</thead>
													<tbody>
														{CITY.slice(0, 9).map((item, index) => (
															<CaregiverDashboardTableRow
																key={item}
																text={item}
																totalCaregiverNationwideCity={totalCaregiverNationwideCity}
																totalCaregiverCount={totalCaregiverCount}
																data={data}
															/>
														))}
													</tbody>
												</table>
											</div>
											<div className='col-6'>
												<table className='table table-modern'>
													<thead>
														<tr>
															<td></td>
															<td>전체</td>
															<td>케어링</td>
														</tr>
													</thead>
													<tbody>
														{CITY.slice(9, CITY.length).map((item, index) => (
															<CaregiverDashboardTableRow
																key={item}
																text={item}
																totalCaregiverNationwideCity={totalCaregiverNationwideCity}
																totalCaregiverCount={totalCaregiverCount}
																data={data}
															/>
														))}
													</tbody>
												</table>
											</div>
										</div>
									)}
									{showDataType === GraphType.BAR && (
										<div>
											<Chart
												series={[
													{
														name: '전국 요양보호사',
														data: totalCaregiverNationwideCity,
													},
													{
														name: '캐어링 요양보호사',
														data: data.statistics,
													},
												]}
												options={{
													chart: {
														height: 400,
														type: 'bar',
													},
													dataLabels: {
														enabled: false,
													},
													xaxis: {
														categories: CITY,
													},
													plotOptions: {
														bar: {
															horizontal: false,
														},
													},
													colors: [
														String(process.env.REACT_APP_INFO_COLOR),
														String(process.env.REACT_APP_SECONDARY_COLOR),
													],
												}}
												type={'bar'}
												height={450}
											/>
										</div>
									)}
								</div>
							</div>
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
