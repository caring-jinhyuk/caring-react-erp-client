import React from 'react';

import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Popovers from '../../../components/bootstrap/Popovers';

const Consult = () => {
	return (
		<PageWrapper title='Consult Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<Popovers title='Consult.tsx' desc={<code>src/pages/CRM/Consult.tsx</code>}>
							Page
						</Popovers>
						<code className='ps-3'>Consult.tsx</code>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Consult;
