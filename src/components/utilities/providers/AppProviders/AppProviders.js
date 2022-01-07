import { BrowserRouter } from 'react-router-dom';
import { element } from 'prop-types';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Import utilities
import { useAppProviders } from './useAppProviders';

export const AppProviders = ({ children }) => {
	const { queryClient } = useAppProviders();

	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={createTheme()}>
					{children}
					<ReactQueryDevtools initialIsOpen={false} />
				</ThemeProvider>
			</QueryClientProvider>
		</BrowserRouter>
	);
};

AppProviders.propTypes = {
	children: element.isRequired,
};
