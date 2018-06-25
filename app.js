const express = require('express');
const router = require('./router');
const app = express();
app.listen(3000, () => {
  console.log('开启端口 3000');
});

// 4 app.js中使用app.use 挂载路由对象
app.use(router);