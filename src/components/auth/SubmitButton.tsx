import styled from "styled-components";

const SubmitButton = styled.input`
	width: 100%;
	border: none;
	border-radius: 3px;
	margin-top: 12px;
	background-color: ${(props) => props.theme.accentBlue};
	color: white;
	text-align: center;
	padding: 6.5px 7px;
	font-weight: 600;
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export default SubmitButton;
