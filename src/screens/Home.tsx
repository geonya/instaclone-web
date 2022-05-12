import PhotoBox from "../components/feed/Photo";
import { useSeeFeedQuery } from "../generated/graphql";

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
