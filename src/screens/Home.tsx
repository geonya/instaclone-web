import PhotoBox from "../components/feed/Photo";
import PageTitle from "../components/PageTitle";
import { useSeeFeedQuery } from "../generated/graphql";

const Home = () => {
	const { data } = useSeeFeedQuery();
	return (
		<div>
			<PageTitle title="Home" />
			{data?.seeFeed?.map((photo) => (
				<PhotoBox {...photo!} key={photo?.id} />
			))}
		</div>
	);
};

export default Home;
