import path from 'path'
import 'webpack-dev-server'
import { buildWebpackConfig } from './config/buildWebpack/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/buildWebpack/types/config'


export default (env: BuildEnv) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'master.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const mode = env.mode || 'development'
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })
};
