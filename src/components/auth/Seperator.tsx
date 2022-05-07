import styled from "styled-components";

const Wrapper = styled.div`
	margin: 20px 0 0px 0;
	text-transform: uppercase;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	div {
		width: 100%;
		height: 1px;
		background-color: ${(props) => props.theme.borderColor};
	}
	span {
		margin: 0 10px;
		color: #8e8e8e;
		font-size: 12px;
		font-weight: 500;
	}
`;

const Seperator = () => {
	return (
		<Wrapper>
			<div />
			<span>or</span>
			<div />
		</Wrapper>
	);
};

export default Seperator;
