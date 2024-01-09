/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { ListBook } from './components/ListBook';
import { SearchInfo } from './components/SearchInfo';

import axios from 'axios';

export const App = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	async function readAuthor() {
		const response = await axios.get('https://run.mocky.io/v3/e419ccef-6c5a-4af5-a8a0-5eb4fb1fa452');
		return response;
	}

	async function readBook() {
		const response = await axios.get('https://run.mocky.io/v3/3c16cb2d-b10d-4e85-842f-81c279238ae2');
		return response;
	}

	const readData = async () => {
		setLoading(true);
		try {
			const [data1, data2] = await Promise.all([readBook(), readAuthor()]);

			const mergedData = data1.data.map((t1: any) => ({
				...t1,
				authorInfo: { ...data2.data.find((t2: any) => t2.id === t1.authorId) },
			}));

			setData(mergedData);
			setSearchResults(mergedData);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		readData();
	}, []);

	return (
		<section>
			<div style={{ maxWidth: '900px', margin: '0 auto', padding: '30px 0' }}>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<h1>Best sellers all times</h1>

					<SearchInfo data={data} setSearchResults={setSearchResults} />
				</div>
			</div>
			<div>{loading ? <p>Cargando...</p> : ''}</div>
			<div style={{ maxWidth: '900px', margin: '0 auto', padding: '30px 0' }}>
				<div>{error ? <p>Error....</p> : <ListBook data={searchResults} />}</div>
			</div>
		</section>
	);
};
