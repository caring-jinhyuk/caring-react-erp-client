import React from 'react';
import DefaultHeader from '../pages/common/Headers/DefaultHeader';
import { homepages } from '../menus/menu';

const headers = [
	{ path: homepages.home.path, element: null, exact: true },
	{
		path: `*`,
		element: <DefaultHeader />,
	},
];

export default headers;
