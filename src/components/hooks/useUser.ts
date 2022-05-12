import { useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedInVar, logUserOut } from "../../apollo";
import { useSeeMeQuery } from "../../generated/graphql";
import routes from "../../routes";

const useUser = () => {
	const navigate = useNavigate();
	const hasToken = useReactiveVar(isLoggedInVar);
	const { data } = useSeeMeQuery({ skip: !hasToken });
	useEffect(() => {
		if (data?.seeMe === null) {
			logUserOut(navigate, routes.home);
		}
	}, [data, navigate]);
	return {
		data,
	};
};

export default useUser;
