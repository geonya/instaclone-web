import { useReactiveVar } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkModeVar, isLoggedInVar } from "./apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import Signup from "./screens/Signup";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";

function App() {
	const isDarkMode = useReactiveVar(darkModeVar);
	const isLoggedIn = useReactiveVar(isLoggedInVar);
	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<GlobalStyles />
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
					{!isLoggedIn ? <Route path="/signup" element={<Signup />} /> : null}
					<Route element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
