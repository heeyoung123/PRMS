import {styled} from "styled-components";
import {BookDetail} from "../../models/book.model";
import {FaHeart} from "react-icons/fa";
import button from "../common/Button";

interface Props {
	book: BookDetail;
	onClick: () => void;
}

const LikeButton = ({book, onClick}: Props) => {

	return (
		<LikeButtonStyle size={"medium"} scheme={book.liked ? "like" : "normal"} onClick={onClick}>
			{FaHeart({})} {book.likes}
		</LikeButtonStyle>
	);
};
const LikeButtonStyle = styled(button)`
    display: flex;
    align-items: center;
    gap: 6px;

    svg {
        color: inherit;

        * {
            color: inherit;
        }
    }
`;

export default LikeButton;