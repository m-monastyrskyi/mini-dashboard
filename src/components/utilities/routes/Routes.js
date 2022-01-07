import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Import helpers
import { ROUTE_PATHS } from 'helpers';
import { APP_ROUTES } from './appRoutes';

const { USERS, COMMENTS, POSTS } = ROUTE_PATHS;

export const Routes = () => {
	return (
		<>
			<Link to={USERS}>Users</Link>
			<Link to={POSTS}>Posts</Link>
			<Link to={COMMENTS}>Comments</Link>
			<ReactRoutes>
				{APP_ROUTES.map(({ path, component: Component }) => (
					<Route
						key={path}
						path={path}
						element={
							<React.Suspense fallback={<h2>Loading...</h2>}>
								{Component}
							</React.Suspense>
						}
					/>
				))}
			</ReactRoutes>
		</>
	);
};
