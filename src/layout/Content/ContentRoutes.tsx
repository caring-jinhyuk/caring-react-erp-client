import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import contents from '../../routes/contentRoutes';
import ProtectedRoute from '../../routes/ProtectedRoute';
import { authPages } from '../../menus/menu';

const PAGE_404 = lazy(() => import('../../pages/auth/Page404'));
const ContentRoutes = () => {
	const getElement = (page: any) => {
		if (page.path === authPages.signIn.path || page.path === authPages.signUp.path) {
			return page.element;
		}

		return <ProtectedRoute key={page.path}>{page.element}</ProtectedRoute>;
	};

	return (
		<Routes>
			{contents.map((page) => (
				// eslint-disable-next-line react/jsx-props-no-spreading
				<Route key={page.path} path={page.path} element={getElement(page)} />
			))}
			<Route path='*' element={<PAGE_404 />} />
		</Routes>
	);
};

export default ContentRoutes;
