import React, { lazy } from 'react';
import { authPages, homepages } from '../menus/menu';

const LANDING = {
	HOMEPAGE: lazy(() => import('../pages/home/HomePage')),
};
const AUTH = {
	ACCOUNT: lazy(() => import('../pages/auth/Account')),
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
		path: authPages.signIn.path,
		element: <AUTH.ACCOUNT />,
		exact: true,
	},
	{
		path: authPages.signUp.path,
		element: <AUTH.ACCOUNT isSignUp />,
		exact: true,
	},
];
const contents = [...presentation];

export default contents;
