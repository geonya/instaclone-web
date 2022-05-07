import { logUserOut } from "../apollo";
const Home = () => {
	return (
		<>
			<h1>Welcome we did it!</h1>
			<button onClick={() => logUserOut()}>Logout</button>
		</>
	);
};

export default Home;
