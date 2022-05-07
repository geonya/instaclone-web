import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseBox } from "../../sharedStyles";

const Container = styled(BaseBox)`
	padding: 20px 10px;
	text-align: center;
	a {
		font-weight: 600;
		margin-left: 5px;
		color: ${(props) => props.theme.accentBlue};
	}
`;

interface IBottomBoxProps {
	cta: string;
	link: string;
	linkText: string;
}

const BottomBox = ({ cta, link, linkText }: IBottomBoxProps) => {
	return (
		<Container>
			<span>{cta}</span>
			<Link to={link}>{linkText}</Link>
		</Container>
	);
};

export default BottomBox;
