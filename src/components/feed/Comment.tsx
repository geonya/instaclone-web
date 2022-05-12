import styled from "styled-components";
import { FatText } from "../../sharedStyles";

const Container = styled.div``;
const Payload = styled.span`
	margin-left: 10px;
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
			<Payload>{payload}</Payload>
		</Container>
	);
};

export default Comment;
