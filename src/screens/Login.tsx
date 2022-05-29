import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import BlueButton from "../components/shared/BlueButton";
import Seperator from "../components/auth/Seperator";
import AuthInput from "../components/auth/AuthInput";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/ButtomBox";
import PageTitle from "../components/PageTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import FormError from "../components/auth/FormError";
import { useLoginMutation } from "../generated/graphql";
import { logUserIn } from "../apollo";
import { useLocation } from "react-router-dom";
import { ISignUpState } from "./SignUp";
import Notification from "../components/Notification";

const FaceBookLogin = styled.div`
	margin-top: 30px;
	color: #385185;
	span {
		margin-left: 10px;
		font-weight: 500;
	}
`;
interface ILoginFormValues {
	username: string;
	password: string;
	result: string;
}

interface IState {
	signUpState: ISignUpState;
}

const Login = () => {
	const location = useLocation();
	const state = location.state as IState;
	const {
		register,
		handleSubmit,
		setError,
		clearErrors,
		formState: { errors, isValid },
	} = useForm<ILoginFormValues>({
		mode: "onChange",
		defaultValues: {
			username: state?.signUpState?.username || "",
			password: state?.signUpState?.password || "",
		},
	});

	const [login, { loading }] = useLoginMutation({
		onCompleted: (data) => {
			if (!data?.login) return;
			const {
				login: { ok, error, token },
			} = data;
			if (!ok) {
				setError("result", {
					message: error!,
				});
			}
			if (token) {
				logUserIn(token);
			}
		},
	});
	const onSubmitValid: SubmitHandler<ILoginFormValues> = (data) => {
		if (loading) return;
		login({
			variables: { ...data },
		});
	};

	return (
		<AuthLayout>
			<PageTitle title="Login" />
			<FormBox>
				<div>
					<FontAwesomeIcon icon={faInstagram} size="4x" />
				</div>
				{state?.signUpState && (
					<Notification message={state?.signUpState?.message} />
				)}
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
							onChange: () => {
								clearErrors("result");
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
							onChange: () => {
								clearErrors("result");
							},
						})}
						type="password"
						placeholder="Password"
						hasError={Boolean(errors?.password?.message)}
					/>
					<FormError message={errors?.password?.message} />
					<BlueButton
						type="submit"
						value={loading ? "Loading..." : "Log In"}
						disabled={!isValid || loading}
					/>
					<FormError message={errors?.result?.message} />
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
