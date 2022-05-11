import styled from "styled-components";

const Container = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #2c2c2c;
	overflow: hidden;
`;

const Img = styled.img`
	max-width: 100%;
`;

interface IAvatarProps {
	url: string | null | undefined;
}
const Avatar = ({ url }: IAvatarProps) => {
	return <Container>{url ? <Img src={url} /> : null}</Container>;
};

export default Avatar;
