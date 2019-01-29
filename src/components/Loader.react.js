/** @jsx React.DOM */

import React from "react";

const Loader = () => (
	<div className={"loader " + (this.props.paging ? "active" : "")}>
		<img src='svg/loader.svg' alt='Loading bars' />
	</div>
);
export default Loader;
