// Import icons
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import CommentIcon from '@mui/icons-material/Comment';

// Import helpers
import { ROUTE_PATHS } from 'helpers';
const { USERS, COMMENTS, POSTS } = ROUTE_PATHS;

export const NAV_LINKS = [
	{ title: 'Users', href: USERS, icon: GroupIcon },
	{ title: 'Posts', href: POSTS, icon: ArticleIcon },
	{ title: 'Comments', href: COMMENTS, icon: CommentIcon },
];
