import React, { FC } from 'react';
import SubHeader from '../../../../layout/SubHeader/SubHeader';
import ScrollspyNav from '../../../../components/bootstrap/ScrollspyNav';
import Button from '../../../../components/bootstrap/Button';
import Card, { CardBody } from '../../../../components/bootstrap/Card';
import { useGetConsultAllList } from '../../../../quries/useGetConsultListAll';
import moment from 'moment';
import { StatisticType } from './CallStatistics';
import { useRecoilValue } from 'recoil';
import { statisticsSearchParam } from '../Statistics';

const CallStaticsDetail = () => {
	const param = useRecoilValue(statisticsSearchParam);
	const callStatistic = useGetConsultAllList(param.from, param.to).contents;
	return (
		<>
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
											<td>${callStatistic.stateCall[0]}명</td>
											<td>${callStatistic.experienceCheckList[0][0]}</td>
											<td>${callStatistic.experienceCheckList[0][1]}</td>
											<td>${callStatistic.experienceCheckList[0][2]}</td>
										</tr>
										<tr>
											<td>가족 서비스시작 전체</td>
											<td>${callStatistic.stateCall[5]}</td>
											<td>${callStatistic.experienceCheckList[1][0]}</td>
											<td>${callStatistic.experienceCheckList[1][1]}</td>
											<td>${callStatistic.experienceCheckList[1][2]}</td>
										</tr>
										{/*<tr>*/}
										{/*	<td>합계</td>*/}
										{/*	<td>{{state_call[0]+state_call[5]}}</td>*/}
										{/*	<td>{{experience_check_list[0][0]+experience_check_list[1][0]}}</td>*/}
										{/*	<td>{{experience_check_list[0][1]+experience_check_list[1][1]}}</td>*/}
										{/*	<td>{{experience_check_list[0][2]+experience_check_list[1][2]}}</td>*/}
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
										{callStatistic.stateList.map((item, index) => (
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
												<td>{callStatistic?.cityList[index]}</td>
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
										{callStatistic.counselors.map((item, index) => (
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
		</>
	);
};

export default CallStaticsDetail;
