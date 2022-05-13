import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { useCreateCommentMutation } from "../../generated/graphql";
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
	photoId: number;
	caption?: string | null;
	author: string;
	commentsCount: number;
	comments?: IComments | null;
}

interface ICommentFormValues {
	payload: string;
}

const Comments = ({
	photoId,
	caption,
	author,
	commentsCount,
	comments,
}: ICommentsProps) => {
	const [createCommentMutation, { loading }] = useCreateCommentMutation();
	const { register, handleSubmit, setValue } = useForm<ICommentFormValues>();
	const onValid: SubmitHandler<ICommentFormValues> = (data) => {
		const { payload } = data;
		if (loading) return;
		createCommentMutation({
			variables: {
				photoId,
				payload,
			},
		});
		setValue("payload", "");
	};
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
			<div>
				<form onSubmit={handleSubmit(onValid)}>
					<input
						{...register("payload", { required: true })}
						type="text"
						placeholder="Write Comment..."
					/>
				</form>
			</div>
		</Container>
	);
};

export default Comments;
