import { Alert, AlertTitle } from '@mui/material';

export const NotFound = () => (
	<Alert severity="warning">
		<AlertTitle>Ups...</AlertTitle>
		Page not found :(
	</Alert>
);
