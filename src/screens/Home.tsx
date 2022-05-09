import { useNavigate } from "react-router-dom";
import { logUserOut } from "../apollo";
const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<h1>Welcome we did it!</h1>
			<button onClick={() => logUserOut(navigate)}>Logout</button>
		</>
	);
};

export default Home;
