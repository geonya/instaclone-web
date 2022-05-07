import { Helmet } from "react-helmet-async";
import { siteMetaData } from "../sharedData";

interface IPageTitleProps {
	title: string;
}

const PageTitle = ({ title }: IPageTitleProps) => {
	return (
		<Helmet>
			<title>
				{title} | {siteMetaData.mainTitle}
			</title>
		</Helmet>
	);
};

export default PageTitle;
