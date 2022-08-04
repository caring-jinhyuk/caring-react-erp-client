import React, { FC, useState } from 'react';
import { CallStatistic, useGetConsultAllList } from '../../../../quries/useGetConsultListAll';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';

interface CallStatisticsProp {
	callStatistic: CallStatistic;
}

const CallStatistics: FC<CallStatisticsProp> = ({ callStatistic }) => {
	//const result = useGetConsultAllList();
	enum StatisticType {
		INFLOW,
		LOCATION,
		STATUS,
		CAUSE,
		HOPE,
		MANAGER,
	}

	const [statisticType, setStatisticType] = useState(StatisticType.INFLOW);

	return (
		<>
			<Card>
				<CardHeader>
					<CardLabel icon='ReceiptLong'>
						<CardTitle tag='h4' className='h5'>
							전체 콜 통계
						</CardTitle>
						<CardSubTitle tag='h5' className='h6'>
							Reports
						</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					{callStatistic && (
						<div className='row'>
							<div className='col-3'>
								<Button
									isLight
									className='col-12 py-4 mb-1'
									shadow='sm'
									hoverShadow='none'
									onClick={() => setStatisticType(StatisticType.INFLOW)}>
									유입매체
								</Button>
								<Button
									isLight
									className='col-12 py-4 mb-1'
									shadow='sm'
									hoverShadow='none'
									onClick={() => setStatisticType(StatisticType.LOCATION)}>
									지역
								</Button>
								<Button
									isLight
									className='col-12 py-4 mb-1'
									shadow='sm'
									hoverShadow='none'
									onClick={() => setStatisticType(StatisticType.STATUS)}>
									상태
								</Button>
								<Button
									isLight
									className='col-12 py-4 mb-1'
									shadow='sm'
									hoverShadow='none'
									onClick={() => setStatisticType(StatisticType.CAUSE)}>
									선택이유
								</Button>
								<Button
									isLight
									className='col-12 py-4 mb-1'
									shadow='sm'
									hoverShadow='none'
									onClick={() => setStatisticType(StatisticType.HOPE)}>
									가산희망
								</Button>
								<Button
									isLight
									className='col-12 py-4 mb-1'
									shadow='sm'
									hoverShadow='none'
									onClick={() => setStatisticType(StatisticType.MANAGER)}>
									매니저
								</Button>
							</div>
							{statisticType == StatisticType.INFLOW && (
								<div className='col-9'>
									<table>
										<thead>
											<tr>
												<th>항목</th>
												<th>
													call<span>(서비스 시작 수)</span>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>전화 온 사람</td>
												<td>
													{callStatistic.calls}명({callStatistic.stateCall[5]})
												</td>
											</tr>
											<tr>
												<td>2번이상 전화한 사람</td>
												<td>
													{callStatistic.calls}명({callStatistic.recallsService})
												</td>
											</tr>
											{callStatistic.inflowList.map((item, index) => (
												<tr key={item}>
													<td>{item}</td>
													<td>
														{callStatistic?.itemCall[index]}({callStatistic?.itemService[index]})
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
							{statisticType === StatisticType.LOCATION && (
								<div className='col-9'>
									<table>
										<thead>
											<tr>
												<th>지역</th>
												<th>call</th>
											</tr>
										</thead>
										<tbody>
											{callStatistic.cityCall.map((item, index) => (
												<tr key={item}>
													<td>{callStatistic?.cityList[index]}</td>
													<td>{item}</td>
												</tr>
											))}
											<tr>
												<td>알수없음</td>
												<td>{callStatistic?.cityCall[17]}</td>
											</tr>
										</tbody>
									</table>
								</div>
							)}
							{statisticType === StatisticType.STATUS && (
								<div className='col-9'>
									<table>
										<thead>
											<tr>
												<th>상태</th>
												<th>call</th>
											</tr>
										</thead>
										<tbody>
											{callStatistic.stateList.map((item, index) => (
												<tr key={item}>
													<td>{item}</td>
													<td>{callStatistic?.stateCall[index]}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
							{statisticType === StatisticType.CAUSE && (
								<div className='col-9'>
									<table>
										<thead>
											<tr>
												<th>선택이유</th>
												<th>call</th>
											</tr>
										</thead>
										<tbody>
											{callStatistic.whyList.map((item, index) => (
												<tr key={item}>
													<td>{item}</td>
													<td>{callStatistic?.choiceReasonCall[index]}</td>
												</tr>
											))}
										</tbody>
										<thead>
											<tr>
												<th>타급여</th>
												<th>call</th>
											</tr>
										</thead>

										<tbody>
											{callStatistic.addInquiryList.map((item, index) => (
												<tr key={item}>
													<td>{item}</td>
													<td>{callStatistic?.addInquiryCall[index]}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
							{statisticType === StatisticType.HOPE && (
								<div className='col-9'>
									<table>
										<thead>
											<tr>
												<th>가산희망 지역</th>
												<th>총 call</th>
											</tr>
										</thead>
										<tbody>
											{callStatistic.cityCall.map((item, index) => (
												<tr key={item}>
													<td>{item}</td>
													<td>{callStatistic?.cityVisitHopeCall[index]}</td>
												</tr>
											))}
											<tr>
												<td>알수없음</td>
												<td>{callStatistic?.cityVisitHopeCall[17]}</td>
											</tr>
										</tbody>
									</table>
								</div>
							)}
							{statisticType === StatisticType.MANAGER && (
								<div className='col-9'>
									<table>
										<thead>
											<tr>
												<th>매니저</th>
												<th>총 call</th>
											</tr>
										</thead>
										<tbody>
											{callStatistic.counselors.map((item, index) => (
												<tr key={item}>
													<td>{item}</td>
													<td>{callStatistic?.counselorsCall[index]}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
						</div>
					)}
				</CardBody>
			</Card>
		</>
	);
};

export default CallStatistics;
