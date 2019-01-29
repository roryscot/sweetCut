import React from "react";
import ReactDOMServer from "react-dom/server";
import TweetsApp from "./src/components/TweetsApp.react";
import Tweet from "./models/Tweet";

module.exports = {
	index: function(req, res) {
		console.log(Tweet.getTweets);
		// Call static model method to get tweets in the db
		Tweet.getTweets(0, 0, function(tweets, pages) {
			// Render React to a string, passing in our fetched tweets
			var markup = ReactDOMServer.renderToString(
				// TweetsApp({
				// 	tweets: tweets,
				// })
				<h1>Hello WOrld</h1>
			);

			// Render our 'home' template
			res.render("home", {
				markup: markup, // Pass rendered react markup
				state: JSON.stringify(tweets), // Pass current state to client side
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
