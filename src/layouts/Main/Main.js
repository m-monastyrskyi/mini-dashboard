import { element } from 'prop-types';
import { CssBaseline, Box, Stack, Container } from '@mui/material';

// Import components
import { NavBar, SideBar } from './components';

export const Main = ({ children }) => {
	return (
		<Box component="main">
			<CssBaseline />
			<Container maxWidth="xl">
				<Stack>
					<NavBar />
					<Stack direction="row" spacing={2} py={5}>
						<SideBar />
						{children}
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

Main.propTypes = {
	children: element.isRequired,
};
