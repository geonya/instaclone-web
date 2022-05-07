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
import FormError from "../components/auth/FormError";

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
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IForm>({ mode: "onChange" });
	// mode: onChange | onBlur | onSubmit | onTouched | all = 'onSubmit'
	const onSubmitValid = (data: IForm) => {
		console.log("Valid DATA", data);
	};
	return (
		<AuthLayout>
			<PageTitle title="Login" />
			<FormBox>
				<div>
					<FontAwesomeIcon icon={faInstagram} size="4x" />
				</div>
				<form onSubmit={handleSubmit(onSubmitValid)}>
					<AuthInput
						{...register("username", {
							required: "username을 입력해주세요.",
							minLength: {
								value: 2,
								message: "2~10자 이내에 영문이나 숫자만 사용 가능합니다. ",
							},
							maxLength: {
								value: 10,
								message: "2~10자 이내에 영문이나 숫자만 사용 가능합니다. ",
							},
							pattern: {
								value: /^[a-z0-9]{2,10}$/g,
								message: "2~10자 이내에 영문이나 숫자만 사용 가능합니다.",
							},
						})}
						type="text"
						placeholder="Username"
						hasError={Boolean(errors?.username?.message)}
					/>
					<FormError message={errors?.username?.message} />
					<AuthInput
						{...register("password", {
							required: "비밀번호를 입력해주세요.",
							minLength: {
								value: 4,
								message: "비밀번호는 최소 4자 이상이여야 합니다.",
							},
						})}
						type="password"
						placeholder="Password"
						hasError={Boolean(errors?.password?.message)}
					/>
					<FormError message={errors?.password?.message} />
					<SubmitButton type="submit" value="Log In" disabled={!isValid} />
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
