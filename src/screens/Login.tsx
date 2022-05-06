import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import SubmitButton from "../components/auth/SubmitButton";
import Seperator from "../components/auth/Seperator";
import AuthInput from "../components/auth/AuthInput";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/ButtomBox";

const FaceBookLogin = styled.div`
	color: #385185;
	span {
		margin-left: 10px;
		font-weight: 500;
	}
`;
const Login = () => {
	return (
		<AuthLayout>
			<FormBox>
				<div>
					<FontAwesomeIcon icon={faInstagram} size="4x" />
				</div>
				<form>
					<AuthInput type="text" placeholder="Username" />
					<AuthInput type="password" placeholder="Password" />
					<SubmitButton type="submit" value="Log In" />
				</form>
				<Seperator />
				<FaceBookLogin>
					<FontAwesomeIcon icon={faFacebookSquare} size="1x" />
					<span>Login in with Facebook</span>
				</FaceBookLogin>
			</FormBox>
			<BottomBox
				cta="Don't Have an accunt?"
				link={routes.signUp}
				linkText="Sgin Up"
			/>
		</AuthLayout>
	);
};

export default Login;
