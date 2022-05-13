import styled from "styled-components";
import { FatText } from "../../sharedStyles";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useDeleteCommentMutation } from "../../generated/graphql";

const Container = styled.div`
	position: relative;
	width: 100%;
`;
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
const DeleteButton = styled.button`
	all: unset;
	position: absolute;
	right: 10px;
	cursor: pointer;
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
	id?: number;
	author?: string;
	payload?: string | null;
	isMine?: boolean;
	photoId?: number;
}

const Comment = ({ id, author, payload, isMine, photoId }: ICommentProps) => {
	const [deleteCommentMutation] = useDeleteCommentMutation({
		variables: { id: id! },
		update: (cache, result) => {
			if (!result?.data?.deleteComment) return;
			const {
				data: {
					deleteComment: { ok },
				},
			} = result;
			if (ok) {
				cache.evict({ id: `Comment:${id}` });
				cache.modify({
					id: `Photo:${photoId}`,
					fields: {
						commentsCount: (prev) => prev - 1,
					},
				});
			}
		},
	});
	const onDeleteClick = () => {
		deleteCommentMutation();
	};
	return (
		<Container>
			<FatText>{author}</FatText>
			<Payload>
				{payload?.split(" ").map((word, i, arr) => (
					<Fragment key={i}>
						{/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w-]+/g.test(word) ? (
							<Link to={`/hastags/${word.replace("#", "")}`}>{word}</Link>
						) : /@[\w-]+/.test(word) ? (
							<Link to={`/users/${word.replace("@", "")}`}>{word}</Link>
						) : (
							word
						)}
						{arr.length - 1 !== i && " "}
					</Fragment>
				))}
			</Payload>
			{isMine ? <DeleteButton onClick={onDeleteClick}>❌</DeleteButton> : null}
		</Container>
	);
};

export default Comment;
