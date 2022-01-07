import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

// Import helpers
import { APP_ROUTES } from './appRoutes';

export const Routes = () => (
	<ReactRoutes>
		{APP_ROUTES.map(({ path, component: Component }) => (
			<Route
				key={path}
				path={path}
				element={
					<React.Suspense fallback={<CircularProgress size={48} />}>
						{Component}
					</React.Suspense>
				}
			/>
		))}
	</ReactRoutes>
);
