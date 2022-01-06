import { useState } from 'react';
import { QueryClient } from 'react-query';

export const useAppProviders = () => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 60 * 1000, // 1 minute
						cacheTime: 5 * 60 * 1000, // 5 minutes
						refetchOnWindowFocus: false,
						retry: 1,
					},
				},
			})
	);

	return { queryClient };
};
