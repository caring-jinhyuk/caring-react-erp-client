import React from 'react';

import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Notices from './components/Notices';

const HomePage = () => {
	return (
		<PageWrapper title='Home Page'>
			<Page>
				<Notices />
			</Page>
		</PageWrapper>
	);
};

export default HomePage;
