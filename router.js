// 0 导入express
const express = require('express');

// 导入控制器模块
const indexCtrl = require('./controller/index');
const userCtrl = require('./controller/user');
const topicCtrl = require('./controller/topic');
const categoryCtrl = require('./controller/category');

// 1 使用express.Router创建路由对象
const router = express.Router();
// 2 配置路由规则

// 配置首页的 处理函数模块
router
  .get('/', indexCtrl.showIndex);

// 配置user的 处理函数模块
router
  .get('/signin', userCtrl.showSignin)
  .post('/signin', userCtrl.handleSignin)
  .get('/signup', userCtrl.showSignup)
  .post('/signup', userCtrl.handleSignup)
  .post('/signout', userCtrl.handleSignout);

router
  .get('/topic/create', topicCtrl.showCreate)
  .post('/topic/create', topicCtrl.handleCreate)
  .get('/topic/:topicID', topicCtrl.show)
  .get('/topic/:topicID/edit', topicCtrl.showEdit)
  .post('/topic/:topicID/edit', topicCtrl.hanldeEdit)
  .get('/topic/:topicID/delete', topicCtrl.hanldeDelete)


// 3 导出路由对象
module.exports = router;
// 4 app.js中使用app.use 挂载路由对象