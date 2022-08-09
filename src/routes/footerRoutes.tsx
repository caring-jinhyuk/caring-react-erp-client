import React from 'react';
import { authPages, homepages } from '../menus/menu';

const footers = [
	{ path: homepages.home.path, element: null, exact: true },
	{ path: authPages.signIn.path, element: null, exact: true },
	{ path: authPages.signUp.path, element: null, exact: true },
	{ path: '*', element: null, exact: true },
	// { path: '*', element: <Footer /> },
];

export default footers;
