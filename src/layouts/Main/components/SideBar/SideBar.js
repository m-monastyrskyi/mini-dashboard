import { Link as RouterLink } from 'react-router-dom';
import {
	Link,
	MenuList,
	MenuItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';

// Import pages
import { NAV_LINKS } from './NAV_LINKS';

export const SideBar = () => {
	const renderLink = ({ title, href, icon: IconComponent }) => (
		<Link component={RouterLink} to={href} underline="none" key={href}>
			<MenuItem>
				<ListItemIcon>
					<IconComponent />
				</ListItemIcon>
				<ListItemText>{title}</ListItemText>
			</MenuItem>
		</Link>
	);

	return (
		<MenuList component="nav" sx={{ minWidth: 200 }}>
			{NAV_LINKS.map(renderLink)}
		</MenuList>
	);
};
