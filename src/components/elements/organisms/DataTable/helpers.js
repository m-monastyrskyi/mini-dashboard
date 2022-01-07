import axios from 'axios';
import { API_URL } from 'helpers';

export const formatColumns = (columns) =>
	columns.map((column) => ({ sortable: false, width: 200, ...column }));

// Normally I would use a custom service instead of axios,
// made with interceptors, custom headers, baseURL, etc.
// but for this example I'll use just axios.
export const fetchData = ({ endpoint, params, signal }) =>
	axios.get(`${API_URL}/${endpoint}`, { signal, params });
