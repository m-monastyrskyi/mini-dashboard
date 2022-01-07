import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => (
	<AppBar position="sticky" sx={{ bgcolor: 'info.main' }}>
		<Toolbar>
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				aria-label="menu"
				sx={{ mr: 2 }}
			>
				<MenuIcon />
			</IconButton>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				Mini Dashboard
			</Typography>
			<Button color="inherit">Logout</Button>
		</Toolbar>
	</AppBar>
);
