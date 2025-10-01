import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
          test: /\.(png|jpe?g|gif|woff2|woff)$/i,
          use: [
              {
                  loader: 'file-loader',
              },
          ],
      }

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
        babelLoader,
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ];
}
