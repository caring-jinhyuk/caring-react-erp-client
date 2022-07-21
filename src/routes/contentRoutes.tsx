import React, { lazy } from 'react';
import { homepages } from '../menus/menu';

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/HomePage')),
};

const presentation = [
	/**
	 * Landing
	 */
	{
		path: homepages.home.path,
		element: <LANDING.DASHBOARD />,
		exact: true,
	},
];
const contents = [...presentation];

export default contents;
