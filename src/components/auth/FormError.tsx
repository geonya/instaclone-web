import styled from "styled-components";

const Span = styled.span`
	margin: 5px 0;
	font-size: 11px;
	color: tomato;
	font-weight: 600;
`;

interface IFormErrorProps {
	message?: string;
}

const FormError = ({ message }: IFormErrorProps) =>
	!message ? null : <Span>{message}</Span>;

export default FormError;
