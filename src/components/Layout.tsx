import styled from "styled-components";
import Header from "./Header";

const Content = styled.main`
	width: 100%;
	margin: 0 auto;
	margin-top: 45px;
	max-width: ${(props) => props.theme.maxWidth};
`;

interface ILayout {
	children: React.ReactNode;
}
const Layout = ({ children }: ILayout) => {
	return (
		<>
			<Header />
			<Content>{children}</Content>
		</>
	);
};

export default Layout;
