import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Popovers from '../../../components/bootstrap/Popovers';

const CaregiverManagement = () => {
	return (
		<PageWrapper title='Caregiver Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<Popovers title='Caregiver.tsx' desc={<code>src/pages/CRM/Caregiver.tsx</code>}>
							Page
						</Popovers>
						<code className='ps-3'>Caregiver.tsx</code>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default CaregiverManagement;
