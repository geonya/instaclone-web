import styled from "styled-components";
import { FatText } from "../../sharedStyles";
import sanitizeHtml from "sanitize-html";

const Container = styled.div``;
const Payload = styled.span`
	margin-left: 10px;
	mark {
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
			<Payload
				dangerouslySetInnerHTML={{
					__html: sanitizeHtml(
						payload?.replace(/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w-]+/g, "<mark>$&</mark>") ||
							"",
						{
							allowedTags: ["mark"],
						}
					),
				}}
			/>
		</Container>
	);
};

export default Comment;
