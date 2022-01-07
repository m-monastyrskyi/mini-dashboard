// Import providers
import { AppProviders } from 'components/utilities';

// Import components
import { Users, Comments, Posts } from 'views';

export const App = () => {
	return (
		<AppProviders>
			<>
				<Users />
				<Comments />
				<Posts />
			</>
		</AppProviders>
	);
};
