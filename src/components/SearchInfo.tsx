/* eslint-disable @typescript-eslint/no-explicit-any */
export const SearchInfo = ({ data, setSearchResults }: any) => {
	const handleChange = (e: any) => {
		if (!e.target.value) return setSearchResults(data);

		const resultsArray = data.filter(
			(dat: any) => dat.title.includes(e.target.value) || dat.description.includes(e.target.value),
		);

		setSearchResults(resultsArray);
	};
	return (
		<div>
			<input
				onChange={handleChange}
				style={{ padding: '10px 50px' }}
				type="text"
				placeholder="write something to search..."
			/>
		</div>
	);
};
