import Header from "../common/Header";
import Footer from "../common/Footer";
import React from "react";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
	return (
		<>
			<Header/>
			<main>{children}
			</main>
			<Footer/>
		</>
	);
};
export default Layout;