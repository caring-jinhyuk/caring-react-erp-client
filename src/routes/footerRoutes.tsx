import React from 'react';
import Footer from '../layout/Footer/Footer';
import { homepages } from '../menus/menu';

const footers = [
	{ path: homepages.home.path, element: null, exact: true },
	{ path: '*', element: <Footer /> },
];

export default footers;
