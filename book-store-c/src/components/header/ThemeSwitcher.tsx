import {ThemeName} from "../../style/theme";
import {ThemeContext} from "../../context/themeContext";
import {useContext} from "react";

const ThemeSwitcher = () => {
	// const toggleTheme = () => {
	// 	setThemeName(themeName === "light" ? "dark" : "light");
	// };
	const {themeName, toggleTheme} = useContext(ThemeContext);
	return (

		<button onClick={toggleTheme}>{themeName}</button>
	);
};
export default ThemeSwitcher;