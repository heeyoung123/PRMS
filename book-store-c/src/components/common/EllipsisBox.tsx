import styled from "styled-components";
import React, {useState} from "react";
import Button from "./Button";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";

interface Props {
	children: React.ReactNode;
	lineLimit: number;
}

interface EllipsisBoxProps {
	lineLimit: number;
	$expanded: boolean;
}

const EllipsisBox = ({children, lineLimit}: Props) => {
	const [expanded, setExpanded] = useState(false);
	return (
		<EllipsisBoxStyle lineLimit={lineLimit} $expanded={expanded}>
			<p>{children}</p>
			<div className={"toggle"}>
				<Button onClick={() => {
					setExpanded(!expanded);
				}} size={"medium"} scheme={"normal"}>{expanded ? (
					<>
						접기 {FaAngleUp({})}
					</>
				) : (
					<>
						펼치기 {FaAngleDown({})}
					</>
				)}</Button>

			</div>
		</EllipsisBoxStyle>
	);
};

const EllipsisBoxStyle = styled.div<EllipsisBoxProps>`
    p {
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 20px 0 0 0;
        margin: 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${({lineLimit, $expanded}) => $expanded ? "none" : lineLimit};
    }

    .toggle {
        display: flex;
        justify-content: end;
        margin-top: 8px;
    }
`;

export default EllipsisBox;