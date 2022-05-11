import { gql } from "@apollo/client";
import {
	faBookmark,
	faComment,
	faHeart,
	faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import { useSeeFeedQuery } from "../generated/graphql";
import { FatText } from "../sharedStyles";

gql`
	query SeeFeed {
		seeFeed {
			id
			user {
				username
				avatar
			}
			file
			caption
			likes
			comments
			createdAt
			isMine
		}
	}
`;

const PhotoContainer = styled.div`
	max-width: 615px;
	margin: 0 auto;
	margin-bottom: 10px;
	background-color: ${(props) => props.theme.bgColor};
	border: 1px solid ${(props) => props.theme.borderColor};
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
`;
const Likes = styled(FatText)`
	display: block;
	margin-top: 15px;
`;
const Home = () => {
	const { data } = useSeeFeedQuery();
	return (
		<div>
			{data?.seeFeed?.map((photo) => (
				<PhotoContainer key={photo?.id}>
					<PhotoHeader>
						<Avatar url={photo?.user.avatar} lg={true} />
						<Username>{photo?.user.username}</Username>
					</PhotoHeader>
					<PhotoFile src={photo?.file} />
					<PhotoData>
						<PhotoActions>
							<div>
								<PhotoAction>
									<FontAwesomeIcon icon={faHeart} size="lg" />
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
						<Likes>
							{photo?.likes === 1 ? "1 like" : `${photo?.likes} likes`}
						</Likes>
					</PhotoData>
				</PhotoContainer>
			))}
		</div>
	);
};

export default Home;
