// Import components
import { DataTable } from 'components/elements';

// Import helpers
import { ENDPOINTS } from 'helpers';
import { columns } from './columns';

const Users = () => {
	return <DataTable columns={columns} endpoint={ENDPOINTS.USERS} />;
};

export default Users;
