import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { NavigateFunction } from "react-router-dom";
import routes from "./routes";

const TOKEN = "token";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const logUserIn = (token: string) => {
	localStorage.setItem(TOKEN, token);
	isLoggedInVar(true);
};
export const logUserOut = (navigate: NavigateFunction) => {
	localStorage.removeItem(TOKEN);
	isLoggedInVar(false);
	navigate(routes.home, { replace: true });
};

export const darkModeVar = makeVar(false);
export const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache(),
});
