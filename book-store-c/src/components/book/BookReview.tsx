import styled from "styled-components";
import {BookReviewItem as IBookReviewItem, BookReviewItemWrite} from "@/models/book.model";
import BookReviewItem from "@/components/book/BookReviewItem";
import BookReviewAdd from "@/components/book/BookReviewAdd";

interface Props {
	reviews: IBookReviewItem[];
	onAdd: (data: BookReviewItemWrite) => void;
}

const BookReview = ({reviews, onAdd}: Props) => {
	return (
		<BookReviewStyled>
			<BookReviewAdd onAdd={onAdd}/>
			{reviews.map((review) => (
				<BookReviewItem review={review}/>
			))}
		</BookReviewStyled>
	);
};
const BookReviewStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export default BookReview;