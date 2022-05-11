import styled from "styled-components";
import Header from "./Header";

const Content = styled.div`
	margin: 0 auto;
	margin-top: 45px;
	max-width: ${(props) => props.theme.maxWidth};
	width: 100%;
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
