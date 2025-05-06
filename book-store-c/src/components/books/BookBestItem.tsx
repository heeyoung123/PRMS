import {Book} from "@/models/book.model";
import styled from "styled-components";
import BookItem, {BookItemStyle} from "@/components/books/BookItem";

interface Props {
	book: Book,
	itemIndex: number
}

const BookBestItem = ({book, itemIndex}: Props) => {
	return (
		<BookBestItemStyle>
			<BookItem book={book} view={"grid"}/>
			<div className={"rank"}>
				{itemIndex + 1}
			</div>
		</BookBestItemStyle>
	);
};

const BookBestItemStyle = styled.div`
    ${BookItemStyle} {
        .summary,
        .price,
        .likes {
            display: none;
        }
    }

    position: relative;

    h2 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .rank {
        position: absolute;
        top: -10px;
        left: -10px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        color: #fff;
        font-weight: bold;
        font-style: italic;
        background: ${(props) => props.theme.color.primary};
        border-radius: 500px;
    }`;
export default BookBestItem;