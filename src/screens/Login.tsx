import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Wrapper = styled.div`
	max-width: 350px;
	width: 100%;
`;

const WhiteBox = styled.div`
	background-color: white;
	border: 1px solid ${(props) => props.theme.borderColor};
	width: 100%;
`;

const TopBox = styled(WhiteBox)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 35px 40px 25px 40px;
	margin-bottom: 30px;
	form {
		width: 100%;
		margin-top: 35px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
`;

const Input = styled.input`
	width: 100%;
	border-radius: 3px;
	padding: 7px;
	background-color: #fafafa;
	border: 0.5px solid ${(props) => props.theme.borderColor};
	margin-top: 5px;
	&::placeholder {
		font-size: 12px;
	}
`;

const Button = styled.input`
	width: 100%;
	border: none;
	border-radius: 3px;
	margin-top: 12px;
	background-color: ${(props) => props.theme.accentBlue};
	color: white;
	text-align: center;
	padding: 6.5px 7px;
	font-weight: 600;
`;

const BottomBox = styled(WhiteBox)`
	padding: 20px 10px;
	text-align: center;
	a {
		font-weight: 600;
		margin-left: 5px;
		color: ${(props) => props.theme.accentBlue};
	}
`;

const Seprator = styled.div`
	margin: 20px 0 30px 0;
	text-transform: uppercase;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	div {
		width: 100%;
		height: 1px;
		background-color: ${(props) => props.theme.borderColor};
	}
	span {
		margin: 0 10px;
		color: #8e8e8e;
		font-size: 12px;
		font-weight: 500;
	}
`;

const FaceBookLogin = styled.div`
	color: #385185;
	span {
		margin-left: 10px;
		font-weight: 500;
	}
`;
const Login = () => {
	return (
		<Container>
			<Wrapper>
				<TopBox>
					<div>
						<FontAwesomeIcon icon={faInstagram} size="4x" />
					</div>
					<form>
						<Input type="text" placeholder="Username" />
						<Input type="password" placeholder="Password" />
						<Button type="submit" value="Log In" />
					</form>
					<Seprator>
						<div />
						<span>or</span>
						<div />
					</Seprator>
					<FaceBookLogin>
						<FontAwesomeIcon icon={faFacebookSquare} size="1x" />
						<span>Login in with Facebook</span>
					</FaceBookLogin>
				</TopBox>
				<BottomBox>
					<span>Don't Have an accunt?</span>
					<Link to="/signup">Sign up</Link>
				</BottomBox>
			</Wrapper>
		</Container>
	);
};

export default Login;
