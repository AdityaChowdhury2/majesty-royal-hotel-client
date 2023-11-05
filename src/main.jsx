import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProviders';
import { Toaster } from 'react-hot-toast';
import ToastProviders from './providers/ToastProviders';
import CustomToast from './components/shared/CustomToast';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<AuthProvider>
				<ToastProviders>
					<RouterProvider router={Routes} />
					<CustomToast />
				</ToastProviders>
				<Toaster />
			</AuthProvider>
		</HelmetProvider>
	</React.StrictMode>
);
