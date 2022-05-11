import { gql, useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../../apollo";
import { useSeeMeQuery } from "../../generated/graphql";

gql`
	query seeMe {
		seeMe {
			username
			avatar
		}
	}
`;

const useUser = () => {
	const isLoggedIn = useReactiveVar(isLoggedInVar);
	const { data, error } = useSeeMeQuery({ skip: !isLoggedIn });
	console.log(data, error);
	return;
};

export default useUser;
