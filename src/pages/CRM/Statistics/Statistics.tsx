import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import CallStatistics from './components/CallStatistics';

const Statistics = () => {
	return (
		<PageWrapper title='Statistics Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<CallStatistics />
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Statistics;
