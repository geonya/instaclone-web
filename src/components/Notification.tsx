import styled from "styled-components";

const Container = styled.div`
	margin-top: 10px;
	color: ${(props) => props.theme.accentGreen};
`;
interface INotificationProps {
	message?: string;
}
const Notification = ({ message }: INotificationProps) => {
	return (
		<Container>
			<span>{message}</span>
		</Container>
	);
};

export default Notification;
