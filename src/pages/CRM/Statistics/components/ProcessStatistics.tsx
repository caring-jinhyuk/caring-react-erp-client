import React, { FC, useState } from 'react';
import { CallData } from '../../../../models/CallData';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import { GraphType } from '../statics/StatisticsStatics';
import Button from '../../../../components/bootstrap/Button';
import Chart from '../../../../components/extras/Chart';
import { COUNSELORS, PROGRESS_LIST } from '../../../../statics/selectValues';

type ProcessStatisticsProps = {
	callStatistic: CallData;
};

const ProcessStatistics: FC<ProcessStatisticsProps> = ({ callStatistic }) => {
	const [showDataType, setShowDataType] = useState<GraphType>(GraphType.TABLE);
	const [showEtc, setShowEtc] = useState<boolean>(false);

	return (
		<>
			<Card>
				<CardHeader>
					<CardLabel className='h6'>
						<CardTitle>고객 상태</CardTitle>
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
								{PROGRESS_LIST.map((item, index) => (
									<tr key={item}>
										<td>{item}</td>
										<td>{callStatistic.progressCheckList[1][index]}</td>
									</tr>
								))}
								<tr>
									<td>확인필요</td>
									<td onClick={() => setShowEtc(!showEtc)}>
										{callStatistic.progressCheckList[1][PROGRESS_LIST.length]}
									</td>
								</tr>
								{showEtc && (
									<tr>
										<td colSpan={1} className='d-flex flex-wrap'>
											{COUNSELORS.map((counselor, index) => (
												<div key={index} className='ps-2 pe-2'>
													{counselor} : {callStatistic.counselorProgressDetail[index]}
												</div>
											))}
										</td>
									</tr>
								)}
							</tbody>
						</table>
					)}
					{showDataType === GraphType.BAR && (
						<Chart
							series={[
								{
									data: callStatistic.progressCheckList[1],
								},
							]}
							options={{
								chart: {
									height: 350,
									type: 'bar',
								},
								xaxis: {
									categories: PROGRESS_LIST,
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
					)}
				</CardBody>
			</Card>
		</>
	);
};

export default ProcessStatistics;
