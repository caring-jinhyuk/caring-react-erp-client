import React, { useState } from 'react';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const CaregiverDashboard = () => {
	return (
		<>
			<Card>
				<CardBody>
					<div>
						<div>현재요양보호사</div>
						<div>11111명</div>
					</div>
					<Chart
						series={[
							3325, 3118, 935, 869, 788, 650, 456, 362, 337, 338, 311, 266, 261, 248, 221, 45, 38,
						]}
						options={{
							chart: {
								width: 380,
								type: 'pie',
							},
							labels: [
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
							],
							responsive: [
								{
									breakpoint: 480,
									options: {
										chart: {
											width: 200,
										},
										legend: {
											position: 'bottom',
										},
									},
								},
							],
						}}
						type={'pie'}
						width={500}
						height={400}
					/>
					<div>
						<div>오늘 증가한 요양보호사: 55명</div>
						<div>어제 최종 요양보호사 수(증가 수): 12517명(↑108)</div>
					</div>
				</CardBody>
			</Card>
		</>
	);
};

export default CaregiverDashboard;
