import React, {useContext} from "react";
import {Home} from "./pages/Home";
import Layout from "./components/layout/Layout";
import {GlobalStyle} from "./style/global";
import {ThemeProvider} from "styled-components";
import {getTheme} from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import {BookStoreThemeProvider, ThemeContext} from "./context/themeContext";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "./components/common/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout><Home/></Layout>,
		errorElement: <Error/>,
	},
	{
		path: "/books",
		element: <Layout>
			<div>도서 목록</div>
		</Layout>,
	},
]);

function App() {
	return (
		<BookStoreThemeProvider>
			{/*<ThemeSwitcher/>*/}
			<RouterProvider router={router}/>
		</BookStoreThemeProvider>
	);
}

export default App;