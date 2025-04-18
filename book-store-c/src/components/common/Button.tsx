import {styled} from "styled-components";
import {ButtonScheme, ButtonSize} from "../../style/theme";
import React from "react";

interface Props {
	disabled?: boolean;
	children: React.ReactNode;
	isLoading?: boolean;
	scheme: ButtonScheme;
	size: ButtonSize;
}

const Button = ({children, size, scheme, disabled, isLoading}: Props) => {
	return <ButtonStyle size={size} scheme={scheme} disabled={disabled} isLoading={isLoading}>{children}</ButtonStyle>;
};
const ButtonStyle = styled.button<Omit<Props, "children">>`
    font-size: ${({theme, size}) => theme.button[size].fontSize};
    padding: ${({theme, size}) => theme.button[size].padding}
    color: ${({theme, scheme}) => theme.buttonScheme[scheme].color};
    background: ${({theme, scheme}) => theme.buttonScheme[scheme].backgroundColor};
    border: 0;
    opacity: ${({disabled}) => disabled ? 0.5 : 1};
    border-radius: ${({theme}) => theme.borderRadius.default};
    pointer-events: ${({disabled}) => disabled ? "none" : "auto"};
    cursor: ${({disabled}) => disabled ? "default" : "pointer"};
`;

export default Button;