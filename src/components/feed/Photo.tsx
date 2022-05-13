import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { FatText } from "../../sharedStyles";
import Avatar from "../Avatar";
import {
	faBookmark,
	faComment,
	faHeart,
	faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { useToggleLikeMutation } from "../../generated/graphql";
import Comments, { IComments } from "./Comments";

const PhotoContainer = styled.div`
	max-width: 615px;
	margin: 0 auto;
	margin-bottom: 20px;
	background-color: ${(props) => props.theme.bgColor};
	border: 1px solid ${(props) => props.theme.borderColor};
	border-radius: 5px;
`;

const PhotoHeader = styled.div`
	padding: 15px;
	display: flex;
	align-items: center;
`;

const Username = styled(FatText)`
	margin-left: 5px;
`;

const PhotoFile = styled.img`
	width: 100%;
`;

const PhotoData = styled.div`
	padding: 15px;
`;

const PhotoActions = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	div {
		display: flex;
		align-items: center;
	}
`;

const PhotoAction = styled.div`
	margin-right: 10px;
	cursor: pointer;
`;
const Likes = styled(FatText)`
	display: block;
	margin-top: 15px;
`;

interface IPhotoBoxProps {
	id: number;
	user: {
		username: string;
		avatar?: string | null;
	};
	file: string;
	isLiked: boolean;
	likes: number;
	caption?: string | null;
	commentsCount: number;
	comments?: IComments | null;
	createdAt: string;
}

const PhotoBox = ({
	id,
	user,
	file,
	isLiked,
	likes,
	caption,
	commentsCount,
	comments,
}: IPhotoBoxProps) => {
	const [toggleLikeMutation] = useToggleLikeMutation({
		variables: {
			id,
		},
		update: (cache) => {
			cache.modify({
				id: `Photo:${id}`,
				fields: {
					isLiked: (prev) => !prev,
					likes: (prev) => (isLiked ? prev - 1 : prev + 1),
				},
			});
		},
	});
	return (
		<PhotoContainer>
			<PhotoHeader>
				<Avatar url={user?.avatar} lg={true} />
				<Username>{user?.username}</Username>
			</PhotoHeader>
			<PhotoFile src={file} />
			<PhotoData>
				<PhotoActions>
					<div>
						<PhotoAction onClick={() => toggleLikeMutation()}>
							<FontAwesomeIcon
								style={{ color: isLiked ? "tomato" : "inherit" }}
								icon={isLiked ? SolidHeart : faHeart}
								size="lg"
							/>
						</PhotoAction>
						<PhotoAction>
							<FontAwesomeIcon icon={faComment} size="lg" />
						</PhotoAction>
						<PhotoAction>
							<FontAwesomeIcon icon={faPaperPlane} size="lg" />
						</PhotoAction>
					</div>
					<div>
						<FontAwesomeIcon icon={faBookmark} size="lg" />
					</div>
				</PhotoActions>
				<Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
				<Comments
					photoId={id}
					author={user?.username}
					caption={caption}
					commentsCount={commentsCount}
					comments={comments}
				/>
			</PhotoData>
		</PhotoContainer>
	);
};

export default PhotoBox;
