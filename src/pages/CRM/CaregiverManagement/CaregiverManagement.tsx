import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import CaregiverDashboard from './components/CaregiverDashboard';
import CaregiverList from './components/CaregiverList';

const CaregiverManagement = () => {
	return (
		<PageWrapper title='Caregiver Page'>
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

export default CaregiverManagement;
