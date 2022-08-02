import React from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Popovers from '../../../components/bootstrap/Popovers';

const Statistics = () => {
	return (
		<PageWrapper title='Statistics Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<Popovers title='Statistics.tsx' desc={<code>src/pages/CRM/Statistics.tsx</code>}>
							Page
						</Popovers>
						<code className='ps-3'>Statistics.tsx</code>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Statistics;
