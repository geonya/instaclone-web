import { gql, useReactiveVar } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkModeVar, isLoggedInVar } from "./apollo";
import { useSeeFeedQuery } from "./generated/graphql";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";

gql`
	query SeeFeed {
		seeFeed {
			id
			user {
				username
			}
			caption
			likes
			isMine
			comments
		}
	}
`;

function App() {
	const { data, loading, error } = useSeeFeedQuery({ variables: {} });
	const isLoggedIn = useReactiveVar(isLoggedInVar);
	const isDarkMode = useReactiveVar(darkModeVar);
	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<GlobalStyles />
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
