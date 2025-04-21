import Header from "../common/Header";
import Footer from "../common/Footer";
import React from "react";
import styled from "styled-components";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
	return (
		<>
			<Header/>
			<LayoutStyle>
				{children}
			</LayoutStyle>
			<Footer/>
		</>
	);
};

const LayoutStyle = styled.main`
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;
    max-width: ${({theme}) => theme.layout.width.large};
`;
export default Layout;