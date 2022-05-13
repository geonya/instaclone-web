import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { useCreateCommentMutation } from "../../generated/graphql";
import useUser from "../hooks/useUser";
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
	const { data: userData } = useUser();
	const { register, handleSubmit, setValue, getValues } =
		useForm<ICommentFormValues>();
	const [createCommentMutation, { loading }] = useCreateCommentMutation({
		update: (cache, result) => {
			if (!result?.data?.createComment) return;
			const { payload } = getValues();
			setValue("payload", "");
			const {
				data: {
					createComment: { ok, id },
				},
			} = result;
			if (ok && userData?.seeMe) {
				const newComment = {
					__typename: "Comment",
					id,
					isMine: true,
					payload,
					user: {
						...userData.seeMe,
					},
					createAt: Date.now() + "",
				};
				cache.modify({
					id: `Photo:${photoId}`,
					fields: {
						comments: (prev) => [...prev, newComment],
						commentsCount: (prev) => prev + 1,
					},
				});
			}
		},
	});
	const onValid: SubmitHandler<ICommentFormValues> = (data) => {
		const { payload } = data;
		if (loading) return;
		createCommentMutation({
			variables: {
				photoId,
				payload,
			},
		});
	};
	return (
		<Container>
			<Comment author={author} payload={caption} />
			<CommentsCount>
				{commentsCount === 1 ? "1 comment" : `${commentsCount} comments`}
			</CommentsCount>
			{comments?.map((comment) => (
				<Comment
					key={comment?.id}
					author={comment?.user.username}
					payload={comment?.payload}
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
