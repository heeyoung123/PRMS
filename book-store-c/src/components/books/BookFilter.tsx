import {styled} from "styled-components";
import {useCategory} from "../../hooks/useCategory";
import Button from "../common/Button";
import {useSearchParams} from "react-router-dom";
import {QUERYSTRING} from "../../constants/querystring";

const BookFilter = () => {
	const {category} = useCategory();
	const [searchParams, setSearchParams] = useSearchParams();
	const handleCategory = (category_id: number | null) => {
		const newSearchParams = new URLSearchParams(searchParams);
		if (category_id === null) {
			newSearchParams.delete(QUERYSTRING.CATEGORY_ID);
		} else {
			newSearchParams.set(QUERYSTRING.CATEGORY_ID, category_id.toString());
		}
		setSearchParams(newSearchParams);
	};


	const handleNews = () => {
		const newSearchParams = new URLSearchParams(searchParams);
		if (newSearchParams.get("news")) {
			newSearchParams.delete("news");
		} else {
			newSearchParams.set("news", "true");
		}
		setSearchParams(newSearchParams);
	};
	return (
		<BookFilterStyle>
			<div className={"category"}>
				{
					category.map((item) => (
						<Button size={"medium"} scheme={item.isActive ? "primary" : "normal"}
						        key={item.category_id}
						        onClick={() => handleCategory(item.category_id)}>{item.category_name}</Button>
					))
				}
			</div>
			<div className={"new"}>
				<Button size={"medium"} scheme={searchParams.get("news") ? "primary" : "normal"}
				        onClick={() => handleNews()}>신간</Button>
			</div>
		</BookFilterStyle>
	);
};
const BookFilterStyle = styled.div`
    display: flex;
    gap: 24px;

    .category {
        display: flex;
        gap: 8px;
    }
`;

export default BookFilter;