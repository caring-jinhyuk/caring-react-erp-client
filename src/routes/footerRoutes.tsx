import React from 'react';
import Footer from '../layout/Footer/Footer';
import { authPages, homepages } from '../menus/menu';

const footers = [
	{ path: homepages.home.path, element: null, exact: true },
	{ path: authPages.login.path, element: null, exact: true },
	{ path: authPages.signUp.path, element: null, exact: true },
	{ path: '*', element: <Footer /> },
];

export default footers;
