import styled from "styled-components";
import { FatText } from "../../sharedStyles";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const Container = styled.div``;
const Payload = styled.span`
	margin-left: 10px;
	a {
		background-color: inherit;
		color: ${(props) => props.theme.accentBlue};
		cursor: pointer;
		&:hover {
			text-decoration: underline;
		}
	}
`;

export interface IComment {
	id: number;
	user: {
		username: string;
		avatar?: string | null;
	};
	payload: string;
	isMine: boolean;
	createdAt: string;
}

interface ICommentProps {
	author?: string;
	payload?: string | null;
}

const Comment = ({ author, payload }: ICommentProps) => {
	return (
		<Container>
			<FatText>{author}</FatText>
			<Payload>
				{payload?.split(" ").map((word, i, arr) => (
					<Fragment key={i}>
						{/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w-]+/g.test(word) ? (
							<Link to={`/hastags/${word.replace("#", "")}`}>{word}</Link>
						) : /@[\w-]+/.test(word) ? (
							<Link to={`/users/${word}`}>{word}</Link>
						) : (
							word
						)}
						{arr.length - 1 !== i && " "}
					</Fragment>
				))}
			</Payload>
		</Container>
	);
};

export default Comment;
