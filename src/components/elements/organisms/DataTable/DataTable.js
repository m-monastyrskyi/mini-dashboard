import { array, string } from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';

// Import components
import { ErrorAlert } from 'components/elements';

// Import utilities
import { useDataTable } from './useDataTable';

// Import helpers
import { INITIAL_TABLE_OPTIONS } from 'helpers';
const { ROWS_PER_PAGE_OPTIONS } = INITIAL_TABLE_OPTIONS;

export const DataTable = ({ columns, endpoint }) => {
	const {
		rows,
		error,
		isError,
		pageSize,
		rowCount,
		isLoading,
		formattedColumns,
		onPageChange,
		onPageSizeChange,
	} = useDataTable({ columns, endpoint });

	if (isError) return <ErrorAlert error={error} />;

	return (
		<DataGrid
			rows={rows}
			columns={formattedColumns}
			loading={isLoading}
			pageSize={pageSize}
			rowCount={rowCount}
			rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
			onPageSizeChange={onPageSizeChange}
			onPageChange={onPageChange}
			paginationMode="server"
			disableColumnFilter
			autoHeight
		/>
	);
};

DataTable.propTypes = {
	columns: array.isRequired,
	endpoint: string.isRequired,
};
