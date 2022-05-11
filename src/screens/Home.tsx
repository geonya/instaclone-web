import { useNavigate } from "react-router-dom";
import { logUserOut } from "../apollo";
import routes from "../routes";
const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<h1>Welcome we did it!</h1>
			<button onClick={() => logUserOut(navigate, routes.home)}>Logout</button>
		</>
	);
};

export default Home;
