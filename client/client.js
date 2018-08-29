/**
 * Created by betty on 8/24/18.
 */

/**
 * webpack-dev-server, socket server功能， 启动一个socket server， 默认端口8080，服务一个webpack app，如react app
 * webpack-dev-server, 打包功能， 将多个文件按照依赖整成一个文件
 * webpack-dev-server, 编译功能， 如es6 用babel转换
 */

/**
 * Express server with webpack
 */

/**
 * Express server with socket.io.client
 *
 */

const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const express = require('express');
const bodyParser = require('body-parser');

const compiler = webpack(webpackConfig);

process.env.NODE_ENV = 'development';

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  hot: true,
  host: 'localhost',
  publicPath: '/'
});
const hotMiddleware = require('webpack-hot-middleware')(compiler);

const app = express();
app.use(bodyParser.json());
app.use(devMiddleware);
app.use(hotMiddleware);


app.listen(8080, () => console.log('Example app listening on port 3000!'));