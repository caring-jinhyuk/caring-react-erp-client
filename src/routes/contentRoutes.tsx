import React, { lazy } from 'react';
import { authPages, homepages } from '../menus/menu';
import { asideMenus } from '../menus/asideMenus';

const LANDING = {
	HOMEPAGE: lazy(() => import('../pages/common/Home/HomePage')),
};
const CRM = {
	CONSULT: lazy(() => import('../pages/CRM/Consult/Consult')),
	STATISTICS: lazy(() => import('../pages/CRM/Statistics/Statistics')),
	SMILE: lazy(() => import('../pages/CRM/SmileCall/SmailCall')),
	BENEFICIARY: lazy(() => import('../pages/CRM/BeneficiaryManagement/BeneficiaryManagement')),
	CAREGIVER: lazy(() => import('../pages/CRM/CaregiverManagement/CaregiverManagement')),
};
const ERP = {};

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
		path: asideMenus.statistics.path,
		element: <CRM.STATISTICS />,
	},
	{
		path: asideMenus.smile.path,
		element: <CRM.SMILE />,
	},
	{
		path: asideMenus.beneficiary_management.path,
		element: <CRM.BENEFICIARY />,
	},
	{
		path: asideMenus.caregiver_management.path,
		element: <CRM.CAREGIVER />,
	},
];
const contents = [...presentation];

export default contents;
