import { isLoggedInVar } from "../apollo";

const Login = () => {
	return (
		<>
			<h1>Please Login!</h1>
			<button onClick={() => isLoggedInVar(true)}>Login</button>
		</>
	);
};

export default Login;
