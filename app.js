const express = require('express');
const router = require('./router');
const expressArtTemplate = require('express-art-template');
const app = express();
app.listen(3000, () => {
  console.log('开启端口 3000');
});

// 配置模板引擎
app.engine('html', expressArtTemplate);
// 配置静态资源
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'))


// 4 app.js中使用app.use 挂载路由对象
app.use(router);