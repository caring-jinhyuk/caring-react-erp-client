import React, { useEffect, useState } from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import CallStatistics from './components/CallStatistics';
import DailyCallStatistics from './components/DailyCallStatistics';
import { useGetConsultAllList } from '../../../quries/useGetConsultListAll';
import { CallData } from './CallData';
import Spinner from '../../../components/bootstrap/Spinner';
import Header, { HeaderLeft, HeaderRight } from '../../../layout/Header/Header';
import Button from '../../../components/bootstrap/Button';
import { atom, useRecoilValue } from 'recoil';
import { v1 } from 'uuid';
import moment from 'moment';

export const statisticsSearchDateAtom = atom({
	key: `${v1()}`,
	default: moment().toDate(),
});

export enum StatisticsPageType {
	DAILY,
	TOTAL,
}

const Statistics = () => {
	const searchDateAtom = useRecoilValue(statisticsSearchDateAtom);
	const { isLoading, data } = useGetConsultAllList();
	const [call, setCall] = useState<CallData>();
	const [pageType, setPageType] = useState<StatisticsPageType>(StatisticsPageType.DAILY);

	useEffect(() => {
		if (data !== undefined) {
			const callData = new CallData(data!, searchDateAtom);
			setCall(callData);
		}
	}, [data, searchDateAtom]);

	const changePage = (type: StatisticsPageType) => {
		setPageType(type);
	};

	return (
		<PageWrapper title='Statistics Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						{isLoading ? (
							<Spinner color={'secondary'} size={100} className='spinner' />
						) : (
							call && (
								<div>
									<Header>
										<HeaderLeft>
											<div>통계</div>
										</HeaderLeft>
										<HeaderRight>
											<Button
												color='info'
												isLink={pageType !== StatisticsPageType.DAILY}
												isLight={pageType === StatisticsPageType.DAILY}
												onClick={() => changePage(StatisticsPageType.DAILY)}>
												Daily 통계
											</Button>
											<Button
												color='info'
												isLink={pageType !== StatisticsPageType.TOTAL}
												isLight={pageType === StatisticsPageType.TOTAL}
												onClick={() => changePage(StatisticsPageType.TOTAL)}>
												전체 통계
											</Button>
										</HeaderRight>
									</Header>
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
