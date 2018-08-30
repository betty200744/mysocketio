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


const webpack = require('webpack');
const express = require('express');
const bodyParser = require('body-parser');
const merge = require('webpack-merge');
let webpackConfig = require('../webpack.common');

process.env.NODE_ENV = 'development';

if (process.env.NODE_ENV === 'production') {
  webpackConfig = merge(webpackConfig, require('../webpack.prod'))
} else {
  webpackConfig = merge(webpackConfig, require('../webpack.dev'))
}
const compiler = webpack(webpackConfig);

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