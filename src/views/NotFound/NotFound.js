import { Alert, AlertTitle } from '@mui/material';

const NotFound = () => (
	<Alert severity="warning">
		<AlertTitle>Ups...</AlertTitle>
		Page not found :(
	</Alert>
);

export default NotFound;
