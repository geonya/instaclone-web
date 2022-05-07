import styled from "styled-components";
import { BaseBox } from "../../sharedStyles";

const Container = styled(BaseBox)`
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

interface IFormBoxProps {
	children: React.ReactNode;
}

const FormBox = ({ children }: IFormBoxProps) => {
	return <Container>{children}</Container>;
};
export default FormBox;
