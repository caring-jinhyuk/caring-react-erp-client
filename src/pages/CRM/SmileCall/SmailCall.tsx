import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Popovers from '../../../components/bootstrap/Popovers';

const SmailCall = () => {
	return (
		<PageWrapper title='SmailCall Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<Popovers title='SmailCall.tsx' desc={<code>src/pages/CRM/SmailCall.tsx</code>}>
							Page
						</Popovers>
						<code className='ps-3'>SmailCall.tsx</code>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default SmailCall;
