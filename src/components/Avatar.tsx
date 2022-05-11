import styled from "styled-components";

const Container = styled.div<{ lg: boolean }>`
	width: ${(props) => (props.lg ? "45px" : "35px")};
	height: ${(props) => (props.lg ? "45px" : "35px")};
	border-radius: 50%;
	background-color: #2c2c2c;
	overflow: hidden;
`;

const Img = styled.img`
	max-width: 100%;
`;

interface IAvatarProps {
	url: string | null | undefined;
	lg: boolean;
}
const Avatar = ({ url, lg }: IAvatarProps) => {
	return <Container lg={lg}>{url ? <Img src={url} /> : null}</Container>;
};

export default Avatar;
