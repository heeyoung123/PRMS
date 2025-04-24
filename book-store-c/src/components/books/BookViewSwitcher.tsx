import {styled} from "styled-components";
import Button from "../common/Button";
import {FaList, FaTh} from "react-icons/fa";
import {useSearchParams} from "react-router-dom";
import {QUERYSTRING} from "../../constants/querystring";
import {useEffect} from "react";


const viewOptions = [
	{
		value: "list",
		icon: FaList({}),
	},
	{
		value: "grid",
		icon: FaTh({}),
	},
];
export type ViewMode = "grid" | "list";

const BookViewSwitcher = () => {
	const [searchParam, setSearchParams] = useSearchParams();
	const handleSwitch = (value: ViewMode) => {
		const newSearchParams = new URLSearchParams(searchParam);
		newSearchParams.set(QUERYSTRING.VIEW, value);
		setSearchParams(newSearchParams);
	};

	useEffect(() => {
		if (!searchParam.get(QUERYSTRING.VIEW)) {
			handleSwitch("grid");
		}
	}, []);
	return (
		<BookViewSwitcherStyle>

			{
				viewOptions.map((option) => (
					<Button key={option.value} onClick={() => handleSwitch(option.value as ViewMode)} size={"medium"}
					        scheme={searchParam.get(QUERYSTRING.VIEW) === option.value ? "primary" : "normal"}>{option.icon}</Button>
				))
			}
		</BookViewSwitcherStyle>
	);
};
const BookViewSwitcherStyle = styled.div`
    display: flex;
    gap: 8px;

    svg {
        fill: #fff;
    }`;

export default BookViewSwitcher;