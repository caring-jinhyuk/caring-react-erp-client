import React, { lazy } from 'react';
import { authPages, homepages } from '../menus/menu';
import { asideMenus } from '../menus/asideMenus';

const LANDING = {
	HOMEPAGE: lazy(() => import('../pages/common/Home/HomePage')),
};
const CRM = {
	CONSULT: lazy(() => import('../pages/CRM/Consult/Consult')),
	STATISTICS: lazy(() => import('../pages/common/Home/HomePage')),
	SMILE: lazy(() => import('../pages/common/Home/HomePage')),
	BENEFICIARY: lazy(() => import('../pages/common/Home/HomePage')),
	CAREGIVER: lazy(() => import('../pages/common/Home/HomePage')),
};
const ERP = {};

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
		path: asideMenus.consult.path,
		element: <CRM.CONSULT />,
	},
	{
		path: asideMenus.job_search_caregiver.path,
		element: <CRM.JOB_SEARCH_CAREGIVER />,
	},
];
const contents = [...presentation];

export default contents;
