import styled from "styled-components";

interface IAuthInputProps {
	hasError?: boolean;
}

const AuthInput = styled.input<IAuthInputProps>`
	width: 100%;
	border-radius: 3px;
	padding: 7px;
	background-color: #fafafa;
	border: 0.5px solid
		${(props) => (props.hasError ? "tomato" : props.theme.borderColor)};
	margin-top: 5px;
	&::placeholder {
		font-size: 12px;
	}
	&:focus {
		border-color: ${(props) => props.theme.accentBlue};
	}
`;

export default AuthInput;
