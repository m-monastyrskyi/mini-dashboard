import { lazy } from 'react';

const LazyUsers = lazy(() => import('views/Users/Users'));

const LazyPosts = lazy(() => import('views/Posts/Posts'));

const LazyComments = lazy(() => import('views/Comments/Comments'));

const LazyNotFound = lazy(() => import('views/NotFound/NotFound'));

export { LazyUsers, LazyComments, LazyPosts, LazyNotFound };
