import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import CaregiverDashboard from './components/CaregiverDashboard';
import CaregiverContainer from './CaregiverContainer';

const CaregiverManagement = () => {
	return (
		<PageWrapper title='Caregiver Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<CaregiverDashboard />
						<CaregiverContainer />
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default CaregiverManagement;
