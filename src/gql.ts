import { gql } from "@apollo/client";

gql`
	query seeMe {
		seeMe {
			id
			username
			avatar
		}
	}
	mutation createAccount(
		$firstName: String!
		$username: String!
		$email: String!
		$password: String!
		$lastName: String
	) {
		createAccount(
			firstName: $firstName
			username: $username
			email: $email
			password: $password
			lastName: $lastName
		) {
			ok
			error
		}
	}
	mutation ToggleLike($id: Int!) {
		toggleLike(id: $id) {
			ok
			error
		}
	}
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
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			ok
			token
			error
		}
	}
`;
