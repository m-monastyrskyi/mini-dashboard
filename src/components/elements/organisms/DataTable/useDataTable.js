import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

// Import helpers
import { formatColumns, fetchData } from './helpers';
import { INITIAL_TABLE_OPTIONS } from 'helpers';

export const useDataTable = ({ columns, endpoint }) => {
	const [pageNumber, setPageNumber] = useState(0);
	const [pageSize, setPageSize] = useState(INITIAL_TABLE_OPTIONS.PAGE_SIZE);
	const [rowCount, setRowCount] = useState(0);
	const [rows, setRows] = useState([]);

	const params = {
		_page: pageNumber + 1,
		_limit: pageSize,
	};

	const { isFetching, data, isFetched, isError, error } = useQuery(
		[endpoint, pageNumber, pageSize],
		// signal is used to cancel the request if the component unmounts
		({ signal }) => fetchData({ endpoint, params, signal })
	);

	const formattedColumns = useMemo(() => formatColumns(columns), [columns]);

	const handleOnPageChange = (newPage) => {
		setPageNumber(newPage);
	};

	const handleOnPageSizeChange = (newPageSize) => {
		setPageSize(newPageSize);
	};

	useEffect(() => {
		if (isFetched && !isError) {
			setRows(data.data);
			const totalRows = +data.headers['x-total-count'];
			setRowCount(totalRows);
		}
	}, [data, isError, isFetched]);

	return {
		rows,
		error,
		isError,
		pageSize,
		rowCount,
		pageNumber,
		setRowCount,
		formattedColumns,
		isLoading: isFetching,
		onPageChange: handleOnPageChange,
		onPageSizeChange: handleOnPageSizeChange,
	};
};
