import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';

import { Users, Comments, Posts, NotFound } from 'views';
import { ROUTE_PATHS } from 'helpers';
const { HOME, USERS, COMMENTS, POSTS } = ROUTE_PATHS;

export const Routes = () => {
	return (
		<ReactRoutes>
			<Route path={HOME} element={<Navigate to={USERS} />} />
			<Route path={USERS} element={<Users />} />
			<Route path={POSTS} element={<Posts />} />
			<Route path={COMMENTS} element={<Comments />} />

			<Route path="*" element={<NotFound />} />
		</ReactRoutes>
	);
};
