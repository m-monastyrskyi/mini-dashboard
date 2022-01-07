// Import providers
import { AppProviders } from 'components/utilities';

// Import components
import { Users, Comments } from 'views';

export const App = () => {
	return (
		<AppProviders>
			<>
				<Users />
				<Comments />
			</>
		</AppProviders>
	);
};
