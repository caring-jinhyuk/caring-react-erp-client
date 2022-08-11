import React, { useEffect, useState } from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import CallStatistics from './components/CallStatistics';
import DailyCallStatistics from './components/DailyCallStatistics';
import { useGetConsultAllList } from '../../../quries/useGetConsultListAll';
import { CallData } from '../../../models/CallData';
import Spinner from '../../../components/bootstrap/Spinner';
import Header, { HeaderLeft, HeaderRight } from '../../../layout/Header/Header';
import Button, { ButtonGroup } from '../../../components/bootstrap/Button';
import { atom, useRecoilValue } from 'recoil';
import { v1 } from 'uuid';
import moment from 'moment';
import { useQueryClient } from '@tanstack/react-query';
import { CallType } from './statics/StatisticsStatics';
import DownloadStatistics from './components/DownloadStatistics';
import { Line } from '../../../components/icon/bootstrap';

export const statisticsSearchParamAtom = atom({
	key: `${v1()}`,
	default: {
		date: moment().toDate() as Date,
		type: CallType.TODAY as CallType,
	},
});

export enum StatisticsPageType {
	DAILY,
	TOTAL,
}

const Statistics = () => {
	const searchParamAtom = useRecoilValue(statisticsSearchParamAtom);
	const { isFetching, data } = useGetConsultAllList();
	const [call, setCall] = useState<CallData>();
	const [pageType, setPageType] = useState<StatisticsPageType>(StatisticsPageType.DAILY);
	const queryClient = useQueryClient();

	useEffect(() => {
		if (data !== undefined) {
			const callData = new CallData(data!, searchParamAtom.date, searchParamAtom.type);
			setCall(callData);
		}
	}, [data, searchParamAtom, isFetching]);

	const changePage = (type: StatisticsPageType) => {
		setPageType(type);
	};

	const refreshData = async () => {
		await queryClient.invalidateQueries(['consultListAll']);
	};

	return (
		<PageWrapper title='Statistics Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						{isFetching ? (
							<Spinner color={'secondary'} size={100} className='spinner' />
						) : (
							call && (
								<div>
									<Header>
										<HeaderLeft>
											<span className='h4 mb-0 fw-bold'>콜 통계</span>
											<ButtonGroup>
												<Button
													color={pageType === StatisticsPageType.DAILY ? 'info' : 'light'}
													onClick={() => changePage(StatisticsPageType.DAILY)}>
													Daily 통계
												</Button>
												<Button
													color={pageType === StatisticsPageType.TOTAL ? 'info' : 'light'}
													onClick={() => changePage(StatisticsPageType.TOTAL)}>
													전체 통계
												</Button>
											</ButtonGroup>
										</HeaderLeft>
										<HeaderRight>
											<Button color='success' icon='Refresh' onClick={refreshData} />
										</HeaderRight>
									</Header>
									<DownloadStatistics />
									{pageType === StatisticsPageType.DAILY && (
										<DailyCallStatistics callStatistic={call} />
									)}
									{pageType === StatisticsPageType.TOTAL && <CallStatistics callStatistic={call} />}
								</div>
							)
						)}
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Statistics;
