import axios from 'axios';
import { API_URL } from 'helpers';

const formatColumn = (column) => ({
	...(!column.width && {
		flex: 1,
		minWidth: 200,
	}),
	sortable: false,
	...column,
});

export const formatColumns = (columns) => columns.map(formatColumn);

// Normally I would use a custom service instead of axios,
// made with interceptors, custom headers, baseURL, etc.
// but for this example I'll use just axios.
export const fetchData = ({ endpoint, params, signal }) =>
	axios.get(`${API_URL}/${endpoint}`, { signal, params });
