/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book } from './Book';

export const ListBook = ({ data }: any) => {
	return (
		<section>
			{data.length === 0 && <p>No hay elementos a mostrar</p>}
			{data.map((book: any) => (
				<Book key={book.id} book={book} />
			))}
		</section>
	);
};
