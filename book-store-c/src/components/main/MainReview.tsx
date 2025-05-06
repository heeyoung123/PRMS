import styled from "styled-components";
import BookReviewItem from "@/components/book/BookReviewItem";
import {BookReviewItem as IBookReviewItem} from "@/models/book.model";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
	reviews: IBookReviewItem[];
}

const MainReview = ({reviews}: Props) => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		gap: 16,
	};
	return (
		<MainReviewStyled>
			<Slider {...sliderSettings}>
				{
					reviews.map((review) => (
						<BookReviewItem key={review.id} review={review}/>
					))}
			</Slider>
		</MainReviewStyled>
	);
};

const MainReviewStyled = styled.div`
    padding: 0 0 24px 0;

    .slick-track {
        padding: 12px 0;
    }

    .slick-slide > div {
        margin: 0 12px;
    }

    .slick-prev:before,
    .slick-next:before {
        color: #000;
    }
`;

export default MainReview;