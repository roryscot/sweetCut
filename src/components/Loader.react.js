import React from "react";

const Loader = props => (
	<div className={"loader " + (props.paging ? "active" : "")}>
		<img src='svg/loader.svg' alt='Loading bars' />
	</div>
);
export default Loader;
