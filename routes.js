import React from "react";
import { renderToString } from "react-dom/server";
import TweetsApp from "./src/components/TweetsApp.react";
import Tweet from "./models/Tweet";

import home from "./views/home";
import main from "./views/main";

var markup = renderToString(TweetsApp);

console.warn(markup);
module.exports = {
	index: function(req, res) {
		// Call static model method to get tweets in the db
		Tweet.getTweets(0, 0, function(tweets, pages) {
			// Render React to a string, passing in our fetched tweets
			var markup = renderToString(<TweetsApp />);

			// Render our 'home' template
			// res.render("home", {
			// 	markup: markup, // Pass rendered react markup
			// 	state: JSON.stringify(tweets), // Pass current state to client side
			// });
			res.send(home, {
				markup: markup,
				state: JSON.stringify(tweets),
			});
		});
	},

	page: function(req, res) {
		// Fetch tweets by page via param
		Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {
			// Render as JSON
			res.send(tweets);
		});
	},
};
