import React, { lazy } from 'react';
import { authPages, homepages } from '../menus/menu';
import { asideMenus } from '../menus/asideMenus';

const LANDING = {
	HOMEPAGE: lazy(() => import('../pages/home/HomePage')),
	SELF_PAY: lazy(() => import('../pages/self_pay/SelfPay')),
};
const AUTH = {
	ACCOUNT: lazy(() => import('../pages/auth/Account')),
};
const CRM = {
	JOB_SEARCH_CAREGIVER: lazy(() => import('../pages/job_search_caregiver/JobSearchCaregiver')),
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
	{
		path: authPages.signUp.path,
		element: <AUTH.ACCOUNT isSignUp />,
		exact: true,
	},
	{
		path: asideMenus.self_pay.path,
		element: <LANDING.SELF_PAY />,
	},
	{
		path: asideMenus.job_search_caregiver.path,
		element: <CRM.JOB_SEARCH_CAREGIVER />,
	},
];
const contents = [...presentation];

export default contents;
