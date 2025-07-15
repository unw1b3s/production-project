import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoader(isDev: boolean): webpack.RuleSetRule[] {

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        namedExport: false,
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
                    },
                },
            },
            {
                loader: "sass-loader",
                options: {
                    sourceMap: true,
                    sassOptions: {
                        outputStyle: "compressed",
                    },
                },
            },
        ],
        exclude: /node_modules/,
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader,
    ];
}