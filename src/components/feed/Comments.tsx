import styled from "styled-components";
import Comment, { IComment } from "./Comment";

const Container = styled.div`
	margin-top: 20px;
`;

const CommentsCount = styled.span`
	display: block;
	opacity: 0.7;
	margin: 10px 0;
	font-size: 12px;
	font-weight: 600;
`;

export interface IComments extends Array<IComment | null> {}

interface ICommentsProps {
	caption?: string | null;
	author: string;
	commentsCount: number;
	comments?: IComments | null;
}

const Comments = ({
	caption,
	author,
	commentsCount,
	comments,
}: ICommentsProps) => {
	return (
		<Container>
			<Comment author={author} payload={caption} />
			<CommentsCount>
				{commentsCount === 1 ? "1 comment" : `${commentsCount} comments`}
			</CommentsCount>
			{comments?.map((comment) => (
				<Comment
					author={comment?.user.username}
					payload={comment?.payload}
					key={comment?.id}
				/>
			))}
		</Container>
	);
};

export default Comments;
