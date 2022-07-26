import React, { useState } from 'react';

import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import CaregiverDashboard from './components/CaregiverDashboard';
import CaregiverList from './components/CaregiverList';
import SubHeader, { SubHeaderRight } from '../../layout/SubHeader/SubHeader';
import Button from '../../components/bootstrap/Button';

const JobSearchCaregiver = () => {
	return (
		<PageWrapper title='JobSearchCaregiver Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<CaregiverDashboard />
						<CaregiverList />
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default JobSearchCaregiver;
