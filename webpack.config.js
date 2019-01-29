const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	entry: "./app.jsx",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public/js"),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devtool: "source-map",
	devServer: {
		hot: true,
	},
	optimization: {
		minimizer: [new UglifyJsPlugin()],
	},
};
