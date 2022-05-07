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
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";

const FaceBookLogin = styled.div`
	margin-top: 30px;
	color: #385185;
	span {
		margin-left: 10px;
		font-weight: 500;
	}
`;

interface IForm {
	username: string;
	password: string;
}
const Login = () => {
	const { register, handleSubmit, setValue, setError } = useForm<IForm>();
	const onSubmitValid = (data: IForm) => {
		console.log("DATA", data);
	};
	const onSubmitInValid = (error: any) => {
		console.log("Error", error);
	};
	return (
		<AuthLayout>
			<PageTitle title="Login" />
			<FormBox>
				<div>
					<FontAwesomeIcon icon={faInstagram} size="4x" />
				</div>
				<form onSubmit={handleSubmit(onSubmitValid, onSubmitInValid)}>
					<AuthInput
						{...register("username", {
							required: "username is required!",
							minLength: {
								message: "2~10자 이내에 영문만 사용 가능합니다. ",
								value: 2,
							},
							maxLength: {
								message: "2~10자 이내에 영문만 사용 가능합니다. ",
								value: 10,
							},
							pattern: {
								message: "2~10자 이내에 영문만 사용 가능합니다.",
								value: /^[a-z0-9]{2,10}$/g,
							},
						})}
						type="text"
						placeholder="Username"
					/>
					<AuthInput
						{...register("password", {
							required: "password is required!",
							minLength: 8,
						})}
						type="password"
						placeholder="Password"
					/>
					<SubmitButton type="submit" value="Log In" disabled={false} />
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
				linkText="Sign Up"
			/>
		</AuthLayout>
	);
};

export default Login;
