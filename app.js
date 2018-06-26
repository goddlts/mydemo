const express = require('express');
const router = require('./router');
const expressArtTemplate = require('express-art-template');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const app = express();
app.listen(3000, () => {
  console.log('开启端口 3000');
});

// 配置session持久化
const options = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'ithub'
};
const sessionStore = new MySQLStore(options);

// 配置session
app.use(session({
  key: 'abc',
  secret: 'keyboard cat',
  resave: true,
  store: sessionStore,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600000
  }
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// 配置模板引擎
app.engine('html', expressArtTemplate);
// 配置静态资源
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));



// 4 app.js中使用app.use 挂载路由对象
app.use(router);

app.use((req, res, next) => {
  // 统一处理404的错误
  res.send('没找到');
});

app.use((err, req, res, next) => {
  if (err) {
    res.json({
      code: 500,
      msg: err.message
    });
  }
});

