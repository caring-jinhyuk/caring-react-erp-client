import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import CallStatistics from './components/CallStatistics';
import { useGetConsultAllList } from '../../../quries/useGetConsultListAll';
import DailyCallStatistics from './components/DailyCallStatistics';

const Statistics = () => {
	const result = useGetConsultAllList();

	return (
		<PageWrapper title='Statistics Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						{result.contents && <CallStatistics callStatistic={result.contents} />}
						{result.contents && <DailyCallStatistics callStatistic={result.contents} />}
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Statistics;
