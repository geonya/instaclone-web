import { gql } from "@apollo/client";
import PhotoBox from "../components/feed/Photo";
import { useSeeFeedQuery } from "../generated/graphql";

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
			isLiked
		}
	}
`;

const Home = () => {
	const { data } = useSeeFeedQuery();
	return (
		<div>
			{data?.seeFeed?.map((photo) => (
				<PhotoBox {...photo!} key={photo?.id} />
			))}
		</div>
	);
};

export default Home;
