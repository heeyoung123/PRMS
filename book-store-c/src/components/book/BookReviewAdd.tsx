import {styled} from "styled-components";
import {BookReviewItemWrite} from "@/models/book.model";
import {useForm} from "react-hook-form";
import Button from "@/components/common/Button";


interface Props {
	onAdd: (data: BookReviewItemWrite) => void;
}

const BookReviewAdd = ({onAdd}: Props) => {
	const {register, handleSubmit, formState: {errors}} = useForm<BookReviewItemWrite>();

	return (
		<BookReviewAddStyled>
			<form onSubmit={handleSubmit(onAdd)}>
				<fieldset><textarea {...register("content", {required: true})}></textarea>
					{errors.content && <div className={"error-text"}>리뷰 내용을 입력해 주세요.</div>}</fieldset>
				<div className={"submit"}>
					<fieldset>
						<select {...register("score", {required: true, valueAsNumber: true})}>
							<option value="1">1점</option>
							<option value="2">2점</option>
							<option value="3">3점</option>
							<option value="4">4점</option>
							<option value="5">5점</option>
						</select>
					</fieldset>
					<Button size={"small"} scheme={"primary"}>작성하기</Button></div>
			</form>
		</BookReviewAddStyled>
	);
};
const BookReviewAddStyled = styled.div`
    form {
        display: flex;
        flex-direction: column;
        gap: 6px;
        background: white;

        fieldset {
            border: 0;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: end;
            gap: 12px;

            .error-text {
                color: red;
                padding: 0;
                margin: 0;
            }
        }

        textarea {
            background: white;
            width: 100%;
            height: 100px;
            border-radius: ${({theme}) => theme.borderRadius.default};
            border: 1px soild ${({theme}) => theme.color.border};
            padding: 12px;
        }
    }

    .submit {
        display: flex;
        justify-content: end;
    }
`;
export default BookReviewAdd;