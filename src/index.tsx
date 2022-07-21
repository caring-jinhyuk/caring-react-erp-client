import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './contexts/themeContext';
import './i18n';

const children = (
	<Router>
		<React.StrictMode>
			<ThemeContextProvider>
				<App />
			</ThemeContextProvider>
		</React.StrictMode>
	</Router>
);

const container = document.getElementById('root');

createRoot(container as Element).render(children);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
