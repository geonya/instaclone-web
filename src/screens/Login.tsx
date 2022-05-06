import { gql } from "@apollo/client";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";

const Container = styled.div``;

const Title = styled.h1`
	font-size: 48px;
	color: ${(props) => props.theme.fontColor};
`;

const Login = () => {
	return (
		<Container>
			<Title>Login</Title>
			<button onClick={() => isLoggedInVar(true)}>Login</button>
		</Container>
	);
};

export default Login;
