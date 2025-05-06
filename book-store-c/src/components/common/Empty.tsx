import React from "react";
import Title from "./Title";
import {styled} from "styled-components";


interface Props {
	description?: React.ReactNode;
	title: string;
	icon?: React.ReactNode;
}

const Empty = ({icon, title, description}: Props) => {
	return (
		<EmptyStyle>
			{/*{FaSmileWink({}) as JSX.Element}*/}
			{icon && <div className={"icon"}>{icon}</div>}
			<Title size="large" color="secondary">{title}</Title>
			{description && <div className={"description"}>{description}</div>}
		</EmptyStyle>
	);
};
const EmptyStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 120px 0;

    .icon {
        svg {
            font-size: 4rem;
            fill: #ccc;
        }
    }
`;
export default Empty;