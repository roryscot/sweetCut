var React = require("react");
import { render } from "react-dom";

var TweetsApp = require("./src/components/TweetsApp.react");

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(
	document.getElementById("initial-state").innerHTML
);

// Render the components, picking up where react left off on the server
render(
	<TweetsApp tweets={initialState} />,
	document.getElementById("react-app")
);
