import {styled} from "styled-components";
import Title from "../components/common/Title";
import BooksFilter from "../components/books/BookFilter";
import BooksList from "../components/books/BookList";
import BooksEmpty from "../components/books/BookEmpty";
import Pagination from "../components/books/Pagination";
import BooksViewSwitcher from "../components/books/BookViewSwitcher";
import {useBooks} from "@/hooks/useBooks";
import Loading from "@/components/common/Loading";
import {useBooksInfinite} from "@/hooks/useBooksInfinite";
import Button from "@/components/common/Button";
import {useEffect, useRef} from "react";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";

function Books() {
	// const {books, pagination, isEmpty, isBooksLoading} = useBooks();
	const {books, pagination, isEmpty, isBooksLoading, fetchNextPage, hasNextPage} = useBooksInfinite();
	const loadMore = () => {
		if (!hasNextPage) return;
		fetchNextPage();
	};

	const moreRef = useIntersectionObserver(([entry]) => {
		if (entry.isIntersecting) {
			loadMore();
		}

	});
	if (isEmpty) {
		return <BooksEmpty/>;
	}
	if (!books || !pagination || isBooksLoading) {
		return <Loading/>;
	}

	return (
		<>
			<Title size="large">도서 검색 결과</Title>
			<BooksStyle>
				<div className="filter">
					<BooksFilter/>
					<BooksViewSwitcher/>
				</div>
				<BooksList books={books}/>
				{/*<Pagination pagination={pagination}/>*/}
				<div className={"more"} ref={moreRef}>
					<Button size={"medium"} scheme={"normal"} onClick={() => fetchNextPage()}
					        disabled={!hasNextPage}>{hasNextPage ? "더보기" : "마지막 페이지"}</Button>
				</div>
			</BooksStyle>
		</>
	);
}

const BooksStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    .filter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 9px;
    }
`;

export default Books;