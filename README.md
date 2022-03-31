# east lake

# 项目结构
- createapp 前端采取 html/less/javascript、vue2.0、vue3.0 框架构成
- node-app  后端采用 node.js 进行部署
- 数据库使用 MySql

# 运行方式

# 问题记录

# 安装包
- npm install body-parser (post相关)
- npm install express 
- npm install mysql (数据库依赖)
- npm install mysql2 
- npm i sequelize (mysql)
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