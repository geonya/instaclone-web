import styled from "styled-components";

const Container = styled.div<{ size: number }>`
	width: ${(props) => `${props.size}px`};
	height: ${(props) => `${props.size}px`};
	border-radius: 50%;
	background-color: #2c2c2c;
	overflow: hidden;
`;

const Img = styled.img`
	max-width: 100%;
`;

interface IAvatarProps {
	url: string | null | undefined;
	size: number;
}
const Avatar = ({ url, size }: IAvatarProps) => {
	return <Container size={size}>{url ? <Img src={url} /> : null}</Container>;
};

export default Avatar;
