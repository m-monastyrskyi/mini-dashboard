import { object } from 'prop-types';
import { Alert, AlertTitle } from '@mui/material';

export const ErrorAlert = ({ error }) => {
	return (
		<Alert severity="error">
			<AlertTitle>Ups...</AlertTitle>
			Something went wrong —{' '}
			<strong>{error.message || 'Please try again later'}</strong>
		</Alert>
	);
};

ErrorAlert.propTypes = {
	error: object.isRequired,
};
