import React from "react";
import Tweet from "./Tweet.react.js";

const Tweets = props => {
	// Build list items of single tweet components using map
	var content = props.tweets.map(function(tweet) {
		return <Tweet key={tweet._id} tweet={tweet} />;
	});

	// Return ul filled with our mapped tweets
	return <ul className='tweets'>{content}</ul>;
};

export default Tweets;
