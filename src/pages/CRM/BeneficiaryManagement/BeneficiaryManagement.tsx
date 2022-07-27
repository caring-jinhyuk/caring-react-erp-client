import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Popovers from '../../../components/bootstrap/Popovers';

const BeneficiaryManagement = () => {
	return (
		<PageWrapper title='Beneficiary Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<Popovers title='Beneficiary.tsx' desc={<code>src/pages/CRM/Beneficiary.tsx</code>}>
							Page
						</Popovers>
						<code className='ps-3'>Beneficiary.tsx</code>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default BeneficiaryManagement;
