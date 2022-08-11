import React, { FC } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import SubHeader from '../../../../layout/SubHeader/SubHeader';
import ScrollspyNav from '../../../../components/bootstrap/ScrollspyNav';
import { CallData } from '../../../../models/CallData';
import {
	ADD_INQUIRY_LIST,
	COUNSELORS,
	INFLOW_LIST,
	STATE_LIST,
	WHY_LIST,
} from '../../../../statics/selectValues';
import { CITY } from '../../../../statics/address';

export enum StatisticType {
	INFLOW = '유입매체',
	LOCATION = '지역',
	STATUS = '상태',
	CAUSE = '선택이유',
	HOPE = '가산희망',
	MANAGER = '매니저',
}

interface CallStatisticsProps {
	callStatistic: CallData;
}

const CallStatistics: FC<CallStatisticsProps> = ({ callStatistic }) => {
	return (
		<>
			<Card>
				<CardHeader>
					<CardLabel icon='ReceiptLong'>
						<CardTitle tag='h4' className='h5'>
							콜 통계
						</CardTitle>
						<CardSubTitle tag='h5' className='h6'>
							Reports
						</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					{callStatistic && (
						<div className='row'>
							<SubHeader className='w-auto'>
								<ScrollspyNav items={Object.values(StatisticType)} />
								{Object.values(StatisticType).map((item, index) => {
									return (
										<a className='w-auto mb-1' key={index} href={`#${item}`}>
											<Button isLight className='' shadow='sm' hoverShadow='none'>
												{item}
											</Button>
										</a>
									);
								})}
							</SubHeader>

							<Card>
								<CardBody>
									<table>
										<tbody>
											<tr>
												{/*<td>전체 콜</td>*/}
												{/*<td>{callStatistic.}({callStatistic.})</td>*/}
											</tr>
										</tbody>
									</table>
								</CardBody>
							</Card>

							<Card className='scroll-margin'>
								<CardBody>
									<table className='table table-modern table-hover'>
										<thead>
											<tr>
												<th>상태</th>
												<th>call</th>
												<th>이관</th>
												<th>신규</th>
												<th>모름</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>가족 진행중 전체</td>
												<td>{callStatistic.stateCall[0]}명</td>
												<td>{callStatistic.experienceCheckList[0][0]}</td>
												<td>{callStatistic.experienceCheckList[0][1]}</td>
												<td>{callStatistic.experienceCheckList[0][2]}</td>
											</tr>
											<tr>
												<td>가족 서비스시작 전체</td>
												<td>{callStatistic.stateCall[5]}명</td>
												<td>{callStatistic.experienceCheckList[1][0]}</td>
												<td>{callStatistic.experienceCheckList[1][1]}</td>
												<td>{callStatistic.experienceCheckList[1][2]}</td>
											</tr>
											<tr>
												<td>합계</td>
												<td>{callStatistic.stateCall[0] + callStatistic.stateCall[5]}</td>
												<td>
													{callStatistic.experienceCheckList[0][0] +
														callStatistic.experienceCheckList[1][0]}
												</td>
												<td>
													{callStatistic.experienceCheckList[0][1] +
														callStatistic.experienceCheckList[1][1]}
												</td>
												<td>
													{callStatistic.experienceCheckList[0][2] +
														callStatistic.experienceCheckList[1][2]}
												</td>
											</tr>
										</tbody>
									</table>
								</CardBody>
							</Card>

							<Card className='scroll-margin'>
								<CardBody>
									<table className='table table-modern table-hover'>
										<thead>
											<tr>
												<th>고객 상태</th>
												<th>call</th>
											</tr>
										</thead>
										<tbody>
											{/*{callStatistic.progressList.map((item, index) => (*/}
											{/*	<tr key={item}>*/}
											{/*		<td>{callStatistic.progressList[index]}</td>*/}
											{/*		<td>{callStatistic.progressCheckList[0][index]}</td>*/}
											{/*	</tr>*/}
											{/*))}*/}
											{/*<tr>*/}
											{/*	<td>확인필요</td>*/}
											{/*	<td>*/}
											{/*		{callStatistic.progressCheckList[0][callStatistic.progressList.length]}*/}
											{/*	</td>*/}
											{/*</tr>*/}
										</tbody>
									</table>
								</CardBody>
							</Card>

							<Card id={StatisticType.INFLOW.toString()} className='scroll-margin'>
								<CardBody>
									<table className='table table-modern table-hover'>
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
											{INFLOW_LIST.map((item, index) => (
												<tr key={item}>
													<td>{item}</td>
													<td>
														{callStatistic?.itemCall[index]}({callStatistic?.itemService[index]})
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</CardBody>
							</Card>
							<Card id={StatisticType.LOCATION.toString()} className='scroll-margin'>
								<CardBody>
									<table className='table table-modern table-hover'>
										<thead>
											<tr>
												<th>지역</th>
												<th>call</th>
											</tr>
										</thead>
										<tbody>
											{callStatistic.cityCall.map((item, index) => (
												<tr key={item}>
													<td>{CITY[index]}</td>
													<td>{item}</td>
												</tr>
											))}
											<tr>
												<td>알수없음</td>
												<td>{callStatistic?.cityCall[17]}</td>
											</tr>
										</tbody>
									</table>
								</CardBody>
							</Card>
							<Card id={StatisticType.STATUS.toString()} className='scroll-margin'>
								<CardBody>
									<table className='table table-modern table-hover'>
										<thead>
											<tr>
												<th>상태</th>
												<th>call</th>
											</tr>
										</thead>
										<tbody>
											{STATE_LIST.map((item, index) => (
												<tr key={item}>
													<td>{item}</td>
													<td>{callStatistic?.stateCall[index]}</td>
												</tr>
											))}
										</tbody>
									</table>
								</CardBody>
							</Card>
							<Card id={StatisticType.CAUSE.toString()} className='scroll-margin'>
								<CardBody>
									<table className='table table-modern table-hover'>
										<thead>
											<tr>
												<th>선택이유</th>
												<th>call</th>
											</tr>
										</thead>
										<tbody>
											{WHY_LIST.map((item, index) => (
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
											{ADD_INQUIRY_LIST.map((item, index) => (
												<tr key={item}>
													<td>{item}</td>
													<td>{callStatistic?.addInquiryCall[index]}</td>
												</tr>
											))}
										</tbody>
									</table>
								</CardBody>
							</Card>
							<Card id={StatisticType.HOPE.toString()} className='scroll-margin'>
								<CardBody>
									<table className='table table-modern table-hover'>
										<thead>
											<tr>
												<th>가산희망 지역</th>
												<th>총 call</th>
											</tr>
										</thead>
										<tbody>
											{callStatistic.cityCall.map((item, index) => (
												<tr key={item}>
													<td>{CITY[index]}</td>
													<td>{callStatistic?.cityVisitHopeCall[index]}</td>
												</tr>
											))}
											<tr>
												<td>알수없음</td>
												<td>{callStatistic?.cityVisitHopeCall[17]}</td>
											</tr>
										</tbody>
									</table>
								</CardBody>
							</Card>
							<Card id={StatisticType.MANAGER.toString()} className='scroll-margin'>
								<CardBody>
									<table className='table table-modern table-hover'>
										<thead>
											<tr>
												<th>매니저</th>
												<th>총 call</th>
											</tr>
										</thead>
										<tbody>
											{COUNSELORS.map((item, index) => (
												<tr key={item}>
													<td>{item}</td>
													<td>{callStatistic?.counselorsCall[index]}</td>
												</tr>
											))}
										</tbody>
									</table>
								</CardBody>
							</Card>
						</div>
					)}
				</CardBody>
			</Card>
		</>
	);
};

export default CallStatistics;
