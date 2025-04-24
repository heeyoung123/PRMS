import {styled} from "styled-components";
import BookItem from "./BookItem";
import {Book} from "../../models/book.model";
import {useLocation} from "react-router-dom";
import {QUERYSTRING} from "../../constants/querystring";
import {useEffect, useState} from "react";
import {ViewMode} from "./BookViewSwitcher";


interface Props {
	books: Book[];
}


const BookList = ({books}: Props) => {
	const location = useLocation();
	const [view, setView] = useState<ViewMode>("grid");

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		if (params.get(QUERYSTRING.VIEW)) {
			setView(params.get(QUERYSTRING.VIEW) as ViewMode);
		}
	}, [location.search]);

	return (
		<>
			<BookListStyle view={view}>
				{
					books?.map((item: Book) => (
						<BookItem key={item.id} book={item} view={view}/>
					))
				}
			</BookListStyle>
		</>
	);
};

interface BooksListStyleProps {
	view: ViewMode;
}

const BookListStyle = styled.div<BooksListStyleProps>`
    display: grid;
    grid-template-columns: ${({view}) => view === "grid" ? "repeat(4, 1fr)" : "repeat(1, 1fr)"};
    gap: 24px;
`;

export default BookList;