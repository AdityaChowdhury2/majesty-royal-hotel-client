import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProviders';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<AuthProvider>
				<RouterProvider router={Routes} />
				<Toaster />
			</AuthProvider>
		</HelmetProvider>
	</React.StrictMode>
);
