const path = require("path");
var webpack = require("webpack");

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
};
