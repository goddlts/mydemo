// 0 导入express
const express = require('express');
// 1 使用express.Router创建路由对象
const router = express.Router();
// 2 配置路由规则
router.get('/', (req, res) => {
  res.send('Hello World1');
});
// 3 导出路由对象
module.exports = router;
// 4 app.js中使用app.use 挂载路由对象