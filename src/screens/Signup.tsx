import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import AuthInput from "../components/auth/AuthInput";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/ButtomBox";
import FormBox from "../components/auth/FormBox";
import Seperator from "../components/auth/Seperator";
import SubmitButton from "../components/auth/SubmitButton";
import routes from "../routes";
import { FatLink } from "../shared";

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const Subtitle = styled(FatLink)`
	margin-top: 10px;
	font-size: 16px;
	text-align: center;
`;

const SignUp = () => {
	return (
		<AuthLayout>
			<FormBox>
				<HeaderContainer>
					<FontAwesomeIcon icon={faInstagram} size="4x" />
					<Subtitle>
						Sign up to see photos and videos from your friends.
					</Subtitle>
					<SubmitButton type="submit" value={`Log in with Facebook`} />
					<Seperator />
				</HeaderContainer>
				<form>
					<AuthInput type="text" placeholder="Email" />
					<AuthInput type="text" placeholder="Name" />
					<AuthInput type="text" placeholder="Username" />
					<AuthInput type="password" placeholder="Password" />
					<SubmitButton type="submit" value="Sign Up" />
				</form>
			</FormBox>
			<BottomBox cta="Have an account?" link={routes.home} linkText="Log in" />
		</AuthLayout>
	);
};

export default SignUp;
