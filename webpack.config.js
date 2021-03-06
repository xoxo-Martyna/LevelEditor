module.exports = [
    {
        mode: "development",
        entry: "./src/index.ts",
        target: "electron-main",
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: /src/,
                    use: [
                        {
                            loader: "ts-loader"
                        }
                    ]
                }
            ]
        },
        output: {
            path: __dirname + "/src",
            filename: "index.js"
        }
    },
    {
        mode: "development",
        entry: "./src/page.ts",
        target: "electron-renderer",
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: /src/,
                    use: [
                        {
                            loader: "ts-loader"
                        }
                    ]
                },
                {
                    test: /\.s[ac]ss$/,
                    include: /src/,
                    use: [
                        "style-loader", "css-loader", "sass-loader"
                    ]
                }
            ]
        },
        resolve: {
            extensions: [
                ".ts",
                ".scss"
            ],
            modules: ["node_modules"]
        },
        output: {
            path: __dirname + "/src",
            filename: "page.js"
        }
    }
]