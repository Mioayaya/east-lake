# east lake

# 项目结构
- createapp 前端采取 html/less/javascript、vue3 框架构成
- node-app  后端采用 node.js 进行部署
- 数据库使用 MySql
- 技术栈: bootstrap、element-plus、Squelize、axios、vue路由

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
- Q3: 在vue3 中如何使用全局变量?
  - A3: 在store中index.js创建变量,以及方法,在vue中使用
  ```javascript
    const store=useStore();
		store.dispatch('userid',3);
		const id2 = store.state.userid; 
  ```
- Q4: 使用elemnet-plus，日期组件的时候，显示是英文，如何转为中文?
  - A4: 详见: https://blog.csdn.net/weixin_49965735/article/details/121099544
- Q5: 使用element-plus, message组件时候，与本地全局变量冲突
  - A5: 将本地全局变量的定义写在最上面
- Q6: 如何判断用户输入全是空格?
  - A6: str.trim() 删除字符前和字符后的空格

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

Q2: 
```
node_modules\express\lib\router\index.js:464
      throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))       
      ^

TypeError: Router.use() requires a middleware function but got a Object
```
A2: 记得加上 module.exports = router;
A: 
