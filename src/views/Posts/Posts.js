// Import components
import { DataTable } from 'components/elements';

// Import helpers
import { ENDPOINTS } from 'helpers';
import { columns } from './columns';

export const Posts = () => {
	return <DataTable columns={columns} endpoint={ENDPOINTS.POSTS} />;
};
