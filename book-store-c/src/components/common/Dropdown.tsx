import styled from "styled-components";
import React, {useEffect, useRef, useState} from "react";

interface Props {
	children: React.ReactNode;
	toggleButton: React.ReactNode;
	isOpen?: boolean;

}

const Dropdown = ({children, toggleButton, isOpen = false}: Props) => {
	const [open, setOpen] = useState(isOpen);
	const handleOpen = () => {
		setOpen(!open);
	};
	const dropdownRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropdownRef]);
	return (
		<DropDownStyled $open={open} ref={dropdownRef}>
			<button className={"toggle"} onClick={handleOpen}>{toggleButton}</button>
			{open && <div className={"panel"}>{children}</div>}
		</DropDownStyled>
	);
};

interface DropdownStyleProps {
	$open: boolean;
}

const DropDownStyled = styled.div<DropdownStyleProps>`
    position: relative;

    button {
        background: none;
        border: none;
        cursor: pointer;
        outline: none;

        svg {
            width: 30px;
            fill: ${({theme, $open}) => $open ? theme.color.primary : theme.color.text};
            height: 30px;
        }
    }

    .panel {
        position: absolute;
        top: 60px;
        right: 0;
        padding: 16px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: ${({theme}) => theme.borderRadius.default};
        z-index: 10;
    }
`;

export default Dropdown;