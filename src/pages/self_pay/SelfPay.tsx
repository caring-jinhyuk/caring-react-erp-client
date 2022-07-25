import React from 'react';

import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import Popovers from '../../components/bootstrap/Popovers';

const SelfPay = () => {
	return (
		<PageWrapper title='SelfPay Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<Popovers title='SelfPay.tsx' desc={<code>src/pages/SelfPay.tsx</code>}>
							Page
						</Popovers>
						<code className='ps-3'>SelfPay.tsx</code>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default SelfPay;
