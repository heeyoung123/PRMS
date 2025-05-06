import Layout from "./components/layout/Layout";
import {Home} from "./pages/Home";
import Login from "./pages/Login";
import {BookStoreThemeProvider} from "./context/themeContext";
// import ThemeSwitcher from "./components/header/ThemeSwitcher";
import ToastContainer from "@/components/common/toast/ToastContainer";
import {QueryClientProvider} from "@tanstack/react-query";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import OrderList from "./pages/OrderList";
import {queryClient} from "@/api/queryClient";

const routerList = [
	{
		path: "/",
		element: <Home/>,
	},
	{
		path: "/books",
		element: <Books/>,
	},
	{
		path: "/register",
		element: <Signup/>,
	},
	{
		path: "/reset",
		element:
			<ResetPassword/>,
	},
	{
		path: "/login",
		element: <Login/>,

	},
	{
		path: "/books",
		element: <Books/>,

	},
	{
		path: "books/:book_id",
		element: <BookDetail/>,
	},
	{
		path: "/cart",
		element: <Cart/>,
	},
	{
		path: "/order",
		element: <Order/>,
	},
	{
		path: "/orderlist",
		element: <OrderList/>,
	},
];
const router = createBrowserRouter(routerList.map((item) => {
	return {
		...item,
		element: <Layout>{item.element}</Layout>,
		errorElement: <Error/>,
	};
}));

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BookStoreThemeProvider>
				{/*<ThemeSwitcher/>*/}
				<RouterProvider router={router}/>
				<ToastContainer/>
			</BookStoreThemeProvider>
		</QueryClientProvider>
	);
}

export default App;