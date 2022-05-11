import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { client, darkModeVar, isLoggedInVar } from "./apollo";
import Layout from "./components/Layout";
import routes from "./routes";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import SignUp from "./screens/SignUp";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";

function App() {
	const isDarkMode = useReactiveVar(darkModeVar);
	const isLoggedIn = useReactiveVar(isLoggedInVar);
	return (
		<ApolloProvider client={client}>
			<HelmetProvider>
				<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
					<GlobalStyles />
					<BrowserRouter basename={process.env.PUBLIC_URL}>
						<Routes>
							<Route
								path={routes.home}
								element={
									isLoggedIn ? (
										<Layout>
											<Home />
										</Layout>
									) : (
										<Login />
									)
								}
							/>
							{!isLoggedIn ? (
								<Route path={routes.signUp} element={<SignUp />} />
							) : null}
							<Route element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</ThemeProvider>
			</HelmetProvider>
		</ApolloProvider>
	);
}

export default App;
