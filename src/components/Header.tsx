import { useReactiveVar } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCompass, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";

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

const Header = () => {
	const isLoggedIn = useReactiveVar(isLoggedInVar);
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
					) : null}
				</Column>
			</Wrapper>
		</Container>
	);
};

export default Header;
