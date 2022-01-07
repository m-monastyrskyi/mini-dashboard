import { Navigate } from 'react-router-dom';

// Import lazy components
import {
	LazyPosts,
	LazyUsers,
	LazyComments,
	LazyNotFound,
} from './lazyComponents';

// Import paths
import { ROUTE_PATHS } from 'helpers';

export const APP_ROUTES = [
	{
		path: ROUTE_PATHS.HOME,
		component: <Navigate to={ROUTE_PATHS.USERS} />,
	},
	{
		path: ROUTE_PATHS.USERS,
		component: <LazyUsers />,
	},
	{
		path: ROUTE_PATHS.POSTS,
		component: <LazyPosts />,
	},
	{
		path: ROUTE_PATHS.COMMENTS,
		component: <LazyComments />,
	},
	{
		path: ROUTE_PATHS.NOT_FOUND,
		component: <LazyNotFound />,
	},
];
