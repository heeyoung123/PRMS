import {BookReviewItem as IBookReviewItem} from "@/models/book.model";
import styled from "styled-components";
import {formatDate} from "@/utils/format";
import {FaStar} from "react-icons/fa";

interface Props {
	review: IBookReviewItem;
}

const Star = (props: Pick<IBookReviewItem, "score">) => {
	return (
		<span className="star">
			{
				Array.from({length: props.score}, (_, index) => (
					<span>{FaStar({})}</span>
				))
			}
		</span>
	);
};

const BookReviewItem = ({review}: Props) => {
	return (
		<BookReviewItemStyle>
			<header className="header">
				<div>
					<span>
						{review.userName}
					</span>
					<Star score={review.score}/>
				</div>
				<div>{formatDate(review.createdAt)}</div>
			</header>
			<div>
				<p>{review.content}</p>
			</div>
		</BookReviewItemStyle>
	);
};


const BookReviewItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    padding: 12px;
    margin: 12px 0;
    border-radius: ${({theme}) => theme.borderRadius.default};
    gap: 12px;

    .header {
        display: flex;
        padding: 0;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;
        color: ${({theme}) => theme.color.secondary};
    }

    .star {
        padding: 0 0 0 8px;

        svg {
            fill: ${({theme}) => theme.color.primary};
        }
    }

    .content {
        p {
            font-size: 1rem;
            margin: 0;
            line-height: 1.25;
        }
    }
`;

export default BookReviewItem;