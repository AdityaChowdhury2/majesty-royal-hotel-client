import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';
import { Toaster } from 'react-hot-toast';
import ToastProviders from './providers/ToastProviders';
import CustomToast from './components/shared/CustomToast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const queryClient = new QueryClient(
	new QueryClient({
		defaultOptions: {
			queries: {
				retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
			},
		},
	})
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<AuthProvider>
				<ToastProviders>
					<QueryClientProvider client={queryClient}>
						<RouterProvider router={Routes} />
						<CustomToast />
						<Toaster />
					</QueryClientProvider>
				</ToastProviders>
			</AuthProvider>
		</HelmetProvider>
	</React.StrictMode>
);
