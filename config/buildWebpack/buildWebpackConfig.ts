import {BuildOptions} from "./types/config";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoader} from "./buildLoader";
import {buildResolvers} from "./buildResolvers";
import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options
   return {
       mode,
       entry: paths.entry,
       output: {
           filename: '[name].[contenthash].js',
           path: paths.build,
           clean: true,
       },
       plugins: buildPlugins(options),
       module: {
           rules: buildLoader(options.isDev),
       },
       resolve: buildResolvers(),
       devtool: isDev ? 'inline-source-map' : undefined,
       devServer: isDev ? buildDevServer(options) : undefined,
   }
}