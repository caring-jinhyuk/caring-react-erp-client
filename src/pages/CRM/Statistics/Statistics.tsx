import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import CallStatistics from './components/CallStatistics';
import moment from 'moment';
import CallStaticsDetail from './components/CallStaticsDetail';
import { atom } from 'recoil';

export const statisticsSearchParam = atom({
	key: 'statisticsSearchParam',
	default: {
		from: moment().startOf('week').add('-1', 'week').toDate(),
		to: moment().toDate(),
	},
});

const Statistics = () => {
	return (
		<PageWrapper title='Statistics Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<CallStatistics />
						<CallStaticsDetail />
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Statistics;
