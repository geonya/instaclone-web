import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** The `Upload` scalar type represents a file upload. */
	Upload: any;
};

export type Comment = {
	__typename?: "Comment";
	createdAt: Scalars["String"];
	id: Scalars["Int"];
	isMine: Scalars["Boolean"];
	payload: Scalars["String"];
	photo: Photo;
	updatedAt: Scalars["String"];
	user: User;
};

export type Hashtag = {
	__typename?: "Hashtag";
	createdAt: Scalars["String"];
	hashtag: Scalars["String"];
	id: Scalars["Int"];
	photos?: Maybe<Array<Maybe<Photo>>>;
	totalPhotos: Scalars["Int"];
	updatedAt: Scalars["String"];
};

export type HashtagPhotosArgs = {
	page: Scalars["Int"];
};

export type Like = {
	__typename?: "Like";
	createdAt: Scalars["String"];
	id: Scalars["Int"];
	photo: Photo;
	updatedAt: Scalars["String"];
};

export type LoginResult = {
	__typename?: "LoginResult";
	error?: Maybe<Scalars["String"]>;
	ok: Scalars["Boolean"];
	token?: Maybe<Scalars["String"]>;
};

export type Message = {
	__typename?: "Message";
	createdAt: Scalars["String"];
	id: Scalars["Int"];
	payload: Scalars["String"];
	read: Scalars["Boolean"];
	room: Room;
	updatedAt: Scalars["String"];
	user: User;
};

export type Mutation = {
	__typename?: "Mutation";
	createAccount?: Maybe<MutationResponse>;
	createComment?: Maybe<MutationResponse>;
	deleteComment?: Maybe<MutationResponse>;
	deleteMessage?: Maybe<MutationResponse>;
	deletePhoto: MutationResponse;
	editComment?: Maybe<MutationResponse>;
	editPhoto: MutationResponse;
	editProfile: MutationResponse;
	followUser?: Maybe<MutationResponse>;
	login?: Maybe<LoginResult>;
	readMessage: MutationResponse;
	sendMessage?: Maybe<MutationResponse>;
	toggleLike?: Maybe<MutationResponse>;
	unfollowUser?: Maybe<MutationResponse>;
	uploadPhoto?: Maybe<Photo>;
};

export type MutationCreateAccountArgs = {
	email: Scalars["String"];
	firstName: Scalars["String"];
	lastName?: InputMaybe<Scalars["String"]>;
	password: Scalars["String"];
	username: Scalars["String"];
};

export type MutationCreateCommentArgs = {
	payload: Scalars["String"];
	photoId: Scalars["Int"];
};

export type MutationDeleteCommentArgs = {
	id: Scalars["Int"];
};

export type MutationDeleteMessageArgs = {
	id: Scalars["Int"];
};

export type MutationDeletePhotoArgs = {
	id: Scalars["Int"];
};

export type MutationEditCommentArgs = {
	id: Scalars["Int"];
	payload: Scalars["String"];
};

export type MutationEditPhotoArgs = {
	caption: Scalars["String"];
	id: Scalars["Int"];
};

export type MutationEditProfileArgs = {
	avatar?: InputMaybe<Scalars["Upload"]>;
	bio?: InputMaybe<Scalars["String"]>;
	email?: InputMaybe<Scalars["String"]>;
	firstName?: InputMaybe<Scalars["String"]>;
	lastName?: InputMaybe<Scalars["String"]>;
	password?: InputMaybe<Scalars["String"]>;
	username?: InputMaybe<Scalars["String"]>;
};

export type MutationFollowUserArgs = {
	username: Scalars["String"];
};

export type MutationLoginArgs = {
	password: Scalars["String"];
	username: Scalars["String"];
};

export type MutationReadMessageArgs = {
	id: Scalars["Int"];
};

export type MutationSendMessageArgs = {
	payload: Scalars["String"];
	roomId?: InputMaybe<Scalars["Int"]>;
	userId?: InputMaybe<Scalars["Int"]>;
};

export type MutationToggleLikeArgs = {
	id: Scalars["Int"];
};

export type MutationUnfollowUserArgs = {
	username: Scalars["String"];
};

export type MutationUploadPhotoArgs = {
	caption?: InputMaybe<Scalars["String"]>;
	file: Scalars["Upload"];
};

export type MutationResponse = {
	__typename?: "MutationResponse";
	error?: Maybe<Scalars["String"]>;
	ok: Scalars["Boolean"];
};

export type Photo = {
	__typename?: "Photo";
	caption?: Maybe<Scalars["String"]>;
	comments: Scalars["Int"];
	createdAt: Scalars["String"];
	file: Scalars["String"];
	hashtags?: Maybe<Array<Maybe<Hashtag>>>;
	id: Scalars["Int"];
	isMine: Scalars["Boolean"];
	likes: Scalars["Int"];
	updatedAt: Scalars["String"];
	user: User;
};

export type Query = {
	__typename?: "Query";
	searchPhotos?: Maybe<Array<Maybe<Photo>>>;
	searchUsers?: Maybe<MutationResponse>;
	seeFeed?: Maybe<Array<Maybe<Photo>>>;
	seeFollowers: MutationResponse;
	seeFollowing: MutationResponse;
	seeHashtag?: Maybe<Hashtag>;
	seePhoto?: Maybe<Photo>;
	seePhotoComments?: Maybe<Array<Maybe<Comment>>>;
	seePhotoLikes?: Maybe<Array<Maybe<User>>>;
	seeProfile?: Maybe<User>;
	seeRoom?: Maybe<Room>;
	seeRooms?: Maybe<Array<Maybe<Room>>>;
};

export type QuerySearchPhotosArgs = {
	keyword: Scalars["String"];
};

export type QuerySearchUsersArgs = {
	keyword: Scalars["String"];
	lastId?: InputMaybe<Scalars["Int"]>;
};

export type QuerySeeFollowersArgs = {
	page: Scalars["Int"];
	username: Scalars["String"];
};

export type QuerySeeFollowingArgs = {
	lastId?: InputMaybe<Scalars["Int"]>;
	username: Scalars["String"];
};

export type QuerySeeHashtagArgs = {
	hashtag: Scalars["String"];
};

export type QuerySeePhotoArgs = {
	id: Scalars["Int"];
};

export type QuerySeePhotoCommentsArgs = {
	id: Scalars["Int"];
	lastId?: InputMaybe<Scalars["Int"]>;
};

export type QuerySeePhotoLikesArgs = {
	id: Scalars["Int"];
};

export type QuerySeeProfileArgs = {
	username: Scalars["String"];
};

export type QuerySeeRoomArgs = {
	id: Scalars["Int"];
};

export type Room = {
	__typename?: "Room";
	createdAt: Scalars["String"];
	id: Scalars["Int"];
	messages?: Maybe<Array<Maybe<Message>>>;
	unreadTotal: Scalars["Int"];
	updatedAt: Scalars["String"];
	users?: Maybe<Array<Maybe<User>>>;
};

export type Subscription = {
	__typename?: "Subscription";
	roomUpdates?: Maybe<Message>;
};

export type SubscriptionRoomUpdatesArgs = {
	id: Scalars["Int"];
};

export type User = {
	__typename?: "User";
	avatar?: Maybe<Scalars["String"]>;
	bio?: Maybe<Scalars["String"]>;
	comments?: Maybe<Array<Maybe<Comment>>>;
	createdAt: Scalars["String"];
	email: Scalars["String"];
	firstName: Scalars["String"];
	followers?: Maybe<Array<Maybe<User>>>;
	following?: Maybe<Array<Maybe<User>>>;
	id: Scalars["Int"];
	isFollowing: Scalars["Boolean"];
	isMe: Scalars["Boolean"];
	lastName?: Maybe<Scalars["String"]>;
	photos?: Maybe<Array<Maybe<Photo>>>;
	totalFollowers: Scalars["Int"];
	totalFollowing: Scalars["Int"];
	updatedAt: Scalars["String"];
	username: Scalars["String"];
};

export type SeeFeedQueryVariables = Exact<{ [key: string]: never }>;

export type SeeFeedQuery = {
	__typename?: "Query";
	seeFeed?: Array<{
		__typename?: "Photo";
		id: number;
		caption?: string | null;
		likes: number;
		isMine: boolean;
		comments: number;
		user: { __typename?: "User"; username: string };
	} | null> | null;
};

export const SeeFeedDocument = gql`
	query SeeFeed {
		seeFeed {
			id
			user {
				username
			}
			caption
			likes
			isMine
			comments
		}
	}
`;

/**
 * __useSeeFeedQuery__
 *
 * To run a query within a React component, call `useSeeFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useSeeFeedQuery(
	baseOptions?: Apollo.QueryHookOptions<SeeFeedQuery, SeeFeedQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SeeFeedQuery, SeeFeedQueryVariables>(
		SeeFeedDocument,
		options
	);
}
export function useSeeFeedLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<SeeFeedQuery, SeeFeedQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SeeFeedQuery, SeeFeedQueryVariables>(
		SeeFeedDocument,
		options
	);
}
export type SeeFeedQueryHookResult = ReturnType<typeof useSeeFeedQuery>;
export type SeeFeedLazyQueryHookResult = ReturnType<typeof useSeeFeedLazyQuery>;
export type SeeFeedQueryResult = Apollo.QueryResult<
	SeeFeedQuery,
	SeeFeedQueryVariables
>;
