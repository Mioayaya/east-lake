# east lake

# 项目结构
- createapp 前端采取 html/less/javascript、vue2.0、vue3.0 框架构成
- node-app  后端采用 node.js 进行部署
- 数据库使用 MySql

# 运行方式

# 问题记录
- Q1: 如何实现前后端的数据交互?  
  - A1: 解决跨域问题
  - 在node.js中 server.js中加入以下代码
  ```javascript
    // 设置跨域访问
    app.all("*",function(req,res,next){
        //设置允许跨域的域名，*代表允许任意域名跨域
        res.header("Access-Control-Allow-Origin","*");
        //允许的header类型
        res.header("Access-Control-Allow-Headers","content-type");
        //跨域允许的请求方式 
        res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
        if (req.method.toLowerCase() == 'options')
            res.send(200);  //让options尝试请求快速结束
        else
            next();
    })
  ```
  - 在vue中 vue.config.js 加入以下代码
  - devServer: { proxy: 'http://localhost:5000' }
- Q2: 使用v-if后 click事件后 组件并没有消失?
  - A2: 使用reactive() 绑定数据即可  
- 

# 安装包
- node.js
  - npm install body-parser (post相关)
  - npm install express 
  - npm install mysql (数据库依赖)
  - npm install mysql2 
  - npm install sequelize (mysql)
  - npm install bcryptjs -s 对密码加密
  - npm install china-time -s 返回北京时间
  - npm install jsonwebtoken 安装jwt
- vue3
  - npm install axios 
  - npm install element-plus --save 安装element-plus
# BUG记录
Q1: node.js 连接mysql 出现如下报错
```
D:\A_code\Vue\item\create\node-app\node_modules\mysql\lib\protocol\Parser.js:437
      throw err; // Rethrow non-MySQL errors
      ^

Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
    at Handshake.Sequence._packetToError (D:\A_code\Vue\item\create\node-app\node_modules\mysql\lib\protocol\sequences\Sequence.js:47:14)
    at Handshake.ErrorPacket (D:\A_code\Vue\item\create\node-app\node_modules\mysql\lib\protocol\sequences\Handshake.js:123:18)
    at Protocol._parsePacket (D:\A_code\Vue\item\create\node-app\node_modules\mysql\lib\protocol\Protocol.js:291:23)
 ······
  {
  code: 'ER_NOT_SUPPORTED_AUTH_MODE',
  errno: 1251,
  sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
  sqlState: '08004',
  fatal: true
}
```
A: 原因：  
 MySQL8.0.4之前，MySQL的密码认证插件是 “mysql_native_password”，而以后版本使用的是“caching_sha2_password”。所以node会密码认证失败  
 详情见: https://blog.csdn.net/jerryyang_2017/article/details/106294279  

# 日志
- 2022/03/30
  - 项目初始化
- 2022/04/02
  - node.js后端服务搭建
  - node.js使用sequelize操作数据库实现用户注册登录
  - 使用hash对用户密码加密
  - 登录成功后,后端返回用户json数据
- 2022/04/03
  - 导航栏的实现
- 2022/04/04
  - 登录 注册页面
  - 遇到问题: 未解决前后端跨域问题
- 2022/04/05
  - 实现轮播图以及签到页面、仅前端
- 2022/04/07
  - 签到打卡实现
  - 课程推荐
  - 解决跨域问题
- 2022/04/08
  - 实现登录注册
  - 路由传递
  - 组件之间传递值
  - 新建查询用户数据api