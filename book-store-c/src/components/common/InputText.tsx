import React, {ForwardedRef} from "react";

interface Props {
	placeholder?: string;
}

const InputText = React.forwardRef((props: Props, ref: ForwardedRef<HTMLInputElement>) => {
	return (
		<div></div>
	);
});