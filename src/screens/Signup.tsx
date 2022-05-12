import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthInput from "../components/auth/AuthInput";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/ButtomBox";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import Seperator from "../components/auth/Seperator";
import SubmitButton from "../components/auth/SubmitButton";
import PageTitle from "../components/PageTitle";
import { useCreateAccountMutation } from "../generated/graphql";
import routes from "../routes";
import { FatLink } from "../sharedStyles";

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

interface IFormValues {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	result?: string;
}

export interface ISignUpState {
	message?: string;
	password?: string;
	username?: string;
}

const SignUp = () => {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors, isValid },
		setError,
		clearErrors,
	} = useForm<IFormValues>({
		mode: "onChange",
	});
	const navigate = useNavigate();
	const [createAccount, { loading }] = useCreateAccountMutation({
		onCompleted: (data) => {
			if (!data?.createAccount) return;
			const {
				createAccount: { ok, error },
			} = data;
			if (!ok) {
				setError("result", {
					message: error!,
				});
			}
			const { username, password } = getValues();
			const signUpState: ISignUpState = {
				username,
				password,
				message: "Account Created! Please Log in",
			};
			navigate(routes.home, {
				state: { signUpState },
			});
		},
	});

	const onSubmitValid: SubmitHandler<IFormValues> = (data) => {
		if (loading) return;
		createAccount({
			variables: { ...data },
		});
	};
	return (
		<AuthLayout>
			<PageTitle title="Sign Up" />
			<FormBox>
				<HeaderContainer>
					<FontAwesomeIcon icon={faInstagram} size="4x" />
					<Subtitle>
						Sign up to see photos and videos from your friends.
					</Subtitle>
					<SubmitButton type="submit" value={`Log in with Facebook`} />
					<Seperator />
				</HeaderContainer>
				<form onSubmit={handleSubmit(onSubmitValid)}>
					<AuthInput
						{...register("firstName", {
							required: "First Name is required!",
							minLength: {
								value: 2,
								message: "2~10자 이내에 영문만 사용 가능합니다. ",
							},
							maxLength: {
								value: 10,
								message: "2~10자 이내에 영문만 사용 가능합니다. ",
							},
							pattern: {
								value: /^[a-zA-Z]{2,10}$/g,
								message: "2~10자 이내에 영문만 사용 가능합니다.",
							},
							onChange: () => {
								clearErrors("result");
							},
						})}
						type="text"
						placeholder="First Name"
					/>
					<FormError message={errors?.firstName?.message} />
					<AuthInput
						{...register("lastName", {
							minLength: {
								value: 2,
								message: "2~10자 이내에 영문만 사용 가능합니다. ",
							},
							maxLength: {
								value: 10,
								message: "2~10자 이내에 영문만 사용 가능합니다. ",
							},
							pattern: {
								value: /^[a-zA-Z]{2,10}$/g,
								message: "2~10자 이내에 영문만 사용 가능합니다.",
							},
							onChange: () => {
								clearErrors("result");
							},
						})}
						type="text"
						placeholder="Last Name"
					/>
					<FormError message={errors?.lastName?.message} />
					<AuthInput
						{...register("email", {
							required: "E-mail is required!",
							pattern: {
								value:
									/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
								message: "이메일이 형식에 맞지 않습니다.",
							},
							onChange: () => {
								clearErrors("result");
							},
						})}
						type="text"
						placeholder="Email"
					/>
					<FormError message={errors?.email?.message} />
					<AuthInput
						{...register("username", {
							required: "User Name is required!",
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
					/>
					<FormError message={errors?.username?.message} />
					<AuthInput
						{...register("password", {
							required: "Password is required!",
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
					/>
					<FormError message={errors?.password?.message} />
					<SubmitButton
						type="submit"
						value={loading ? "Loading..." : "Sign Up"}
						disabled={!isValid || loading}
					/>
				</form>
			</FormBox>
			<BottomBox cta="Have an account?" link={routes.home} linkText="Log in" />
		</AuthLayout>
	);
};

export default SignUp;
