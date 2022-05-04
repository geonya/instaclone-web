import { isLoggedInVar } from "../apollo";
const Home = () => {
	return (
		<>
			<h1>Home</h1>
			<button onClick={() => isLoggedInVar(false)}>Logout</button>
		</>
	);
};

export default Home;
