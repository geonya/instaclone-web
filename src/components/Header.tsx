import { useReactiveVar } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCompass, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import routes from "../routes";
import useUser from "./hooks/useUser";

const Container = styled.div`
	width: 100%;
	border-bottom: 1px solid ${(props) => props.theme.borderColor};
	background-color: ${(props) => props.theme.bgColor};
	padding: 18px 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	max-width: ${(props) => props.theme.maxWidth};
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Column = styled.div``;

const Icon = styled.span`
	margin-left: 15px;
`;

const Button = styled.span`
	background-color: ${(props) => props.theme.accentBlue};
	border-radius: 4px;
	padding: 5px 15px;
	color: white;
	font-weight: 600;
`;

const Header = () => {
	const isLoggedIn = useReactiveVar(isLoggedInVar);
	const loggedInUser = useUser();
	return (
		<Container>
			<Wrapper>
				<Column>
					<FontAwesomeIcon icon={faInstagram} size="2x" />
				</Column>
				<Column>
					{isLoggedIn ? (
						<>
							<Icon>
								<FontAwesomeIcon icon={faHome} size="2x" />
							</Icon>
							<Icon>
								<FontAwesomeIcon icon={faCompass} size="2x" />
							</Icon>
							<Icon>
								<FontAwesomeIcon icon={faUser} size="2x" />
							</Icon>
						</>
					) : (
						<Link to={routes.home}>
							<Button>Login</Button>
						</Link>
					)}
				</Column>
			</Wrapper>
		</Container>
	);
};

export default Header;
