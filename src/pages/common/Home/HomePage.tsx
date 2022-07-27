import React, { useEffect } from 'react';

import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Popovers from '../../../components/bootstrap/Popovers';
import { NoticeControllerService } from '../../../services/openApi';

const HomePage = () => {
	useEffect(() => {
		const getNoticeList = async () => {
			const data = await NoticeControllerService.getNoticeListUsingGet();
		};
		getNoticeList();
	}, []);

	return (
		<PageWrapper title='Home Page'>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<Popovers title='HomePage.tsx' desc={<code>src/pages/HomePage.tsx</code>}>
							Page
						</Popovers>
						<code className='ps-3'>HomePage.tsx</code>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default HomePage;
