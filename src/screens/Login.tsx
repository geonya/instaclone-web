import styled from "styled-components";
import { darkModeVar, isLoggedInVar } from "../apollo";

const Container = styled.div`
	height: 100vh;
	background-color: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
	font-size: 48px;
	color: ${(props) => props.theme.fontColor};
`;

const Login = () => {
	return (
		<Container>
			<Title>Login</Title>
			<button onClick={() => isLoggedInVar(true)}>Login</button>
			<button onClick={() => darkModeVar(true)}>DarkMode</button>
			<button onClick={() => darkModeVar(false)}>LightMode</button>
		</Container>
	);
};

export default Login;
