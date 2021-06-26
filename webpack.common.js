const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    context: path.join(__dirname, "src", "client"),
    entry: ["./index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].bundle.js",
    },
    target: "web",

    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [{ from: "res", to: "res" }],
        }),
        new HtmlPlugin({
            file: path.join(__dirname, "dist", "index.html"),
            template: "./index.html",
        }),
    ],
};
