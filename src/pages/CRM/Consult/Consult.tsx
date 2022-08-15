import React from 'react';

import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import SubHeader from '../../../layout/SubHeader/SubHeader';

import ConsultSelectBar from './components/ConsultSelectBar';
import ConsultList from './components/ConsultList';
import ConsultSearchBar from './components/ConsultSearchBar';

const Consult = () => {
	return (
		<PageWrapper title='Consult Page'>
			<SubHeader>
				<ConsultSelectBar />
				<ConsultSearchBar />
			</SubHeader>
			<Page>
				<ConsultList />
			</Page>
		</PageWrapper>
	);
};

export default Consult;
