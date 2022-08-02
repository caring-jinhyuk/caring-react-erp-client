import React, { Suspense } from 'react';
import ContentRoutes from './ContentRoutes';
import SpinnerContainer from '../../components/SpinnerContainer';

const Content = () => {
	return (
		<main className='content'>
			<Suspense fallback={<SpinnerContainer />}>
				<ContentRoutes />
			</Suspense>
		</main>
	);
};

export default Content;
