import Button from "@my-lib/Button";
import Container from "@my-lib/Container";

export default function App(): JSX.Element {
	return (
		<Container>
			<p data-testid="app">{`What's up App!?`}</p>
			<Button />
		</Container>
	);
}
