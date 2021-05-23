import { HTMLProps } from "react";

export default function Button(props: HTMLProps<HTMLButtonElement>): JSX.Element {
	/**
	 * Any "Stateless" components can be in the library folder
	 */
	
	return <button {...props} type={'button'} />;
}