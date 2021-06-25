const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    context: path.join(__dirname, "src"),
    entry: ["./js/main.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "game.min.[hash:8].js",
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
