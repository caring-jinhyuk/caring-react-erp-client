import React from 'react';

import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import NoticeList from './components/NoticeList';

const HomePage = () => {
	return (
		<PageWrapper title='Home Page'>
			<Page>
				<NoticeList />
			</Page>
		</PageWrapper>
	);
};

export default HomePage;
