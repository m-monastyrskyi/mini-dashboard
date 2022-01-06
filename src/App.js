// Import providers
import { AppProviders } from 'components/utilities';

// Import components
import { DataTable } from 'components/elements';

export const App = () => {
	return (
		<AppProviders>
			<DataTable />
		</AppProviders>
	);
};
