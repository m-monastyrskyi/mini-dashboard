// Import components
import { DataTable } from 'components/elements';

// Import helpers
import { ENDPOINTS } from 'helpers';
import { columns } from './columns';

const Comments = () => {
	return <DataTable columns={columns} endpoint={ENDPOINTS.COMMENTS} />;
};

export default Comments;
