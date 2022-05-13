import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import { useSeeProfileQuery } from "../generated/graphql";
import { FatText } from "../sharedStyles";

const Header = styled.div`
	display: flex;
`;
const AvatarContainer = styled.div`
	margin: 0 150px 0 50px;
`;
const Column = styled.div``;
const Row = styled.div`
	display: flex;
	margin-bottom: 20px;
	font-size: 16px;
`;
const List = styled.ul`
	display: flex;
`;
const Item = styled.li`
	margin-right: 20px;
`;
const Value = styled(FatText)`
	font-size: 18px;
`;
const Username = styled.h3`
	font-size: 28px;
	font-weight: 400;
`;
const Name = styled(FatText)`
	font-size: 20px;
`;
const Grid = styled.div`
	display: grid;
	grid-auto-rows: 290px;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
	margin-top: 50px;
`;
const Photo = styled.div<{ bg: string | undefined }>`
	background-image: url(${(props) => props.bg});
	background-size: cover;
	position: relative;
`;
const Icons = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
	opacity: 0;
	&:hover {
		opacity: 1;
	}
`;
const Icon = styled.span`
	font-size: 18px;
	display: flex;
	align-items: center;
	margin: 0 5px;
	svg {
		font-size: 14px;
		margin-right: 5px;
	}
`;

interface IGetUserButtonProps {
	isMe: boolean;
	isFollowing: boolean;
}

const Profile = () => {
	const { username } = useParams();
	const { data } = useSeeProfileQuery({
		variables: {
			username: username!,
		},
	});
	const getUserButton = ({ isMe, isFollowing }: IGetUserButtonProps) => {
		if (isMe) {
			return <button>Edit Profile</button>;
		}
		if (isFollowing) {
			return <button>Unfollow</button>;
		} else {
			return <button>Follow</button>;
		}
	};
	return (
		<div>
			<Header>
				<AvatarContainer>
					<Avatar url={data?.seeProfile?.avatar!} size={160} />
				</AvatarContainer>
				<Column>
					<Row>
						<Username>{data?.seeProfile?.username}</Username>
						{data?.seeProfile ? getUserButton(data?.seeProfile) : null}
					</Row>
					<Row>
						<List>
							<Item>
								<span>
									<Value>{data?.seeProfile?.totalFollowers}</Value> followers
								</span>
							</Item>
							<Item>
								<span>
									<Value>{data?.seeProfile?.totalFollowing}</Value> followings
								</span>
							</Item>
						</List>
					</Row>
					<Row>
						<Name>
							{data?.seeProfile?.firstName} {data?.seeProfile?.lastName}
						</Name>
					</Row>
					<Row>{data?.seeProfile?.bio}</Row>
				</Column>
			</Header>
			<Grid>
				{data?.seeProfile?.photos?.map((photo, i) => (
					<Photo bg={photo?.file} key={i}>
						<Icons>
							<Icon>
								<FontAwesomeIcon icon={faHeart} />
								{photo?.likes}
							</Icon>
							<Icon>
								<FontAwesomeIcon icon={faComment} />
								{photo?.commentsCount}
							</Icon>
						</Icons>
					</Photo>
				))}
			</Grid>
		</div>
	);
};

export default Profile;
