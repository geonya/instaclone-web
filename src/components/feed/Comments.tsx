import { gql } from "@apollo/client";
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

const PostCommentContainer = styled.div`
	margin-top: 10px;
	padding: 15px 0;
	border-top: 1px solid ${(props) => props.theme.borderColor};
`;
const PostCommentInput = styled.input`
	width: 100%;
	&::placeholder {
		font-size: 12px;
	}
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
					createdAt: Date.now() + "",
				};
				// create comment cache (cache에 comment가 없으면 지울 수 없음)
				// graphql 로 작업할 때는 cache가 database라고 생각해야함
				const newCacheComment = cache.writeFragment({
					data: newComment,
					fragment: gql`
						fragment BSName on Comment {
							id
							createdAt
							isMine
							payload
							user {
								username
								avatar
							}
						}
					`,
				});
				cache.modify({
					id: `Photo:${photoId}`,
					fields: {
						comments: (prev) => [...prev, newCacheComment],
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
					id={comment?.id}
					author={comment?.user.username}
					payload={comment?.payload}
					isMine={comment?.isMine}
					photoId={photoId}
				/>
			))}
			<PostCommentContainer>
				<form onSubmit={handleSubmit(onValid)}>
					<PostCommentInput
						{...register("payload", { required: true })}
						type="text"
						placeholder="Write Comment..."
					/>
				</form>
			</PostCommentContainer>
		</Container>
	);
};

export default Comments;
