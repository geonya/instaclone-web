import { useReactiveVar } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { darkModeVar, disableDarkMode, enableDarkMode } from "../../apollo";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Wrapper = styled.div`
	max-width: 350px;
	width: 100%;
`;

const Footer = styled.footer`
	margin-top: 20px;
	cursor: pointer;
`;

const DarkModeBtn = styled.span``;

interface IAuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
	const darkMode = useReactiveVar(darkModeVar);
	return (
		<Container>
			<Wrapper>{children}</Wrapper>
			<Footer>
				<DarkModeBtn onClick={darkMode ? disableDarkMode : enableDarkMode}>
					<FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="1x" />
				</DarkModeBtn>
			</Footer>
		</Container>
	);
};

export default AuthLayout;
