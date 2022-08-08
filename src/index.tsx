import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './contexts/themeContext';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const children = (
	<React.StrictMode>
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<Router>
					<ThemeContextProvider>
						<ReactQueryDevtools initialIsOpen={false} />
						<App />
					</ThemeContextProvider>
				</Router>
			</QueryClientProvider>
		</RecoilRoot>
	</React.StrictMode>
);

const container = document.getElementById('root');

createRoot(container as Element).render(children);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
