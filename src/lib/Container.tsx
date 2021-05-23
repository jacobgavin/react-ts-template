import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren<unknown>): JSX.Element {
	return <div>{children}</div>;
}