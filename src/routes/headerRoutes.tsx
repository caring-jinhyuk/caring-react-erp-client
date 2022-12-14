import React from 'react';
import DefaultHeader from '../pages/common/Headers/DefaultHeader';
import { authPages } from '../menus/menu';

const headers = [
	{ path: authPages.signIn.path, element: null, exact: true },
	{ path: authPages.signUp.path, element: null, exact: true },
	{
		path: `*`,
		element: <DefaultHeader />,
	},
];

export default headers;
