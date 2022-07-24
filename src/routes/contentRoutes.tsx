import React, { lazy } from 'react';
import { authPages, homepages } from '../menus/menu';

const LANDING = {
	HOMEPAGE: lazy(() => import('../pages/home/HomePage')),
};
const AUTH = {
	LOGIN: lazy(() => import('../pages/auth/Login')),
};
const presentation = [
	/**
	 * Landing
	 */
	{
		path: homepages.home.path,
		element: <LANDING.HOMEPAGE />,
		exact: true,
	},
	{
		path: authPages.login.path,
		element: <AUTH.LOGIN />,
		exact: true,
	},
	{
		path: authPages.signUp.path,
		element: <AUTH.LOGIN isSignUp />,
		exact: true,
	},
];
const contents = [...presentation];

export default contents;
