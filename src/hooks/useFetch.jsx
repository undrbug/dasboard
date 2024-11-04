import { useEffect, useState } from "react";

export const URL_BASE = "http://localhost:3008/api";
export const URL_BASE_IMG = "http://localhost:3008";

const useFetch = (endpoint) => {
	const url = `${URL_BASE}${endpoint}`;

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setError(null);
				setLoading(true);
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`Error fetching data from ${url}, status: ${response.status}, Motivo: ${response.statusText}`);
				}
				const data = await response.json();
				setData(data);
			} catch (error) {
				console.error("Failed to fetch data:", error);
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [endpoint]);

	return { data, loading, error };
};

export default useFetch;