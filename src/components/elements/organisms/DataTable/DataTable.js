import { DataGrid } from '@mui/x-data-grid';

import { useQuery } from 'react-query';
import axios from 'axios';

const columns = [
	{ field: 'id', headerName: 'ID', sortable: false },
	{ field: 'name', headerName: 'Name', sortable: false },
	{ field: 'email', headerName: 'Email', sortable: false, width: 200 },
	{ field: 'phone', headerName: 'Phone', sortable: false },
	{ field: 'website', headerName: 'Website', sortable: false, width: 100 },
	{
		field: 'company.name',
		headerName: 'Company',
		sortable: false,
		renderCell: ({ row }) => row.company.name,
	},
];

const fetchData = () => axios('https://jsonplaceholder.typicode.com/users');

export const DataTable = () => {
	const { isLoading, data } = useQuery('data', fetchData);

	const rows = data?.data ?? [];

	return (
		<DataGrid
			rows={rows}
			columns={columns}
			loading={isLoading}
			rowsPerPageOptions={[5, 10, 25, 50, 100]}
			disableColumnFilter
			autoHeight
		/>
	);
};
