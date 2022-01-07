// Import providers
import { AppProviders, Routes } from 'components/utilities';
// Import Layout
import { Main as MainLayout } from 'layouts';

export const App = () => {
	return (
		<AppProviders>
			<MainLayout>
				<Routes />
			</MainLayout>
		</AppProviders>
	);
};
