import React from "react";

const CustomInput = React.forwardRef(({ type, onChange, placeHolder }, ref) => (
	<input type={type} onChange={onChange} placeholder={placeHolder} ref={ref} />
));
export default CustomInput;
