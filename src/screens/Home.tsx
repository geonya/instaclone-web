import { gql } from "@apollo/client";
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
	background-color: ${(props) => props.theme.bgColor};
	border: 1px solid ${(props) => props.theme.borderColor};
	margin-bottom: 10px;
`;

const PhotoHeader = styled.div`
	padding: 5px 10px;
	display: flex;
	align-items: center;
`;

const Username = styled(FatText)`
	margin-left: 5px;
`;

const Home = () => {
	const { data } = useSeeFeedQuery();
	return (
		<>
			{data?.seeFeed?.map((photo) => (
				<PhotoContainer key={photo?.id}>
					<PhotoHeader>
						<Avatar url={photo?.user.avatar} />
						<Username>{photo?.user.username}</Username>
					</PhotoHeader>
				</PhotoContainer>
			))}
		</>
	);
};

export default Home;
