/* eslint-disable @typescript-eslint/no-explicit-any */
interface Author {
	id: number;
	name: string;
}

interface Book {
	authorId: number;
	id: number;
	title: string;
	authorInfo: Author;
	description: string;
}

export const Book = ({ book }: any) => {
	return (
		<article style={{ marginBottom: '2rem', border: '1px solid black', borderRadius: '8px', padding: '1rem' }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem' }}>
				<h2>{book.title}</h2>
				<p>AuthorID : {book.authorInfo.id}</p>
			</div>
			<p style={{ paddingBottom: '1rem' }}>{book.authorInfo.name}</p>
			<p style={{ paddingBottom: '1rem' }}>{book.description}</p>
		</article>
	);
};
