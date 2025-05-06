import styled from "styled-components";
import {Book} from "@/models/book.model";
import BookItem from "@/components/books/BookItem";

interface Props {
	books: Book[];
}

const MainNewBooks = ({books}: Props) => {
	return (
		<MainNewBookStyled>
			{
				books.map((book) => (
					<BookItem key={book.id} book={book} view={"grid"}/>
				))
			}
		</MainNewBookStyled>
	);
};

const MainNewBookStyled = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(4, 1fr);

`;

export default MainNewBooks;