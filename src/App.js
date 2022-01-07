// Import providers
import { AppProviders } from 'components/utilities';

// Import components
import { Users } from 'views';

export const App = () => {
	return (
		<AppProviders>
			<Users />
		</AppProviders>
	);
};
