export const columns = [
	{ field: 'id', headerName: 'ID', width: 50 },
	{ field: 'name', headerName: 'Name' },
	{ field: 'email', headerName: 'Email' },
	{ field: 'phone', headerName: 'Phone' },
	{ field: 'website', headerName: 'Website' },
	{
		field: 'company.name',
		headerName: 'Company',
		renderCell: ({ row }) => row.company.name,
	},
];
