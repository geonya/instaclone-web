import { useReactiveVar } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import routes from "../routes";
import Avatar from "./Avatar";
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

const IconsContainer = styled.div`
	display: flex;
	align-items: center;
`;

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
	const { data } = useUser();
	return (
		<Container>
			<Wrapper>
				<Column>
					<Link to={routes.home}>
						<FontAwesomeIcon icon={faInstagram} size="3x" />
					</Link>
				</Column>
				<Column>
					{isLoggedIn ? (
						<IconsContainer>
							<Link to={routes.home}>
								<Icon>
									<FontAwesomeIcon icon={faHome} size="2x" />
								</Icon>
							</Link>
							<Icon>
								<FontAwesomeIcon icon={faCompass} size="2x" />
							</Icon>
							<Icon>
								<Link to={`/users/${data?.seeMe?.username}`}>
									<Avatar url={data?.seeMe?.avatar} size={35} />
								</Link>
							</Icon>
						</IconsContainer>
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
