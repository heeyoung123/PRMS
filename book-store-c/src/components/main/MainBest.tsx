import {Book} from "@/models/book.model";
import styled from "styled-components";
import BookBestItem from "@/components/books/BookBestItem";

interface Props {
	books: Book[];
}

const MainBest = ({books}: Props) => {
	return (
		<MainBestStyled>
			{books.map((item, index) => (
				<BookBestItem book={item} itemIndex={index} key={item.id}/>
			))}
		</MainBestStyled>
	);
};

const MainBestStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
`;
export default MainBest;