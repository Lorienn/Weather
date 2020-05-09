# 天气通
天气通是一款具备天气查询和热点新闻功能的移动端Web应用，使用vue-cli构建的单页面应用。项目使用的技术栈有vuex、vue-router、vue-resource、ES6等。
<br />

#### 主要技术
- 使用Vue框架。项目采用vue-cli3.x快速搭建项目环境，采用vue-router管理前端路由，采用vuex管理状态和跨组件通信，使用axios请求第三方api数据；
- 使用PHP5.6+MySQL实现前台用户的登录和注册功能，使用sessionStorage技术和vuex记住用户当前登录状态；
- 使用Mint UI组件库实现图片懒加载和菊花图，使用view UI组件库实现表单和部分布局，使用阿里矢量图标库获取天气类icon；
- 使用flex实现自适应布局，使用sass编写组件样式
<br />

## 项目功能
- 天气查询<br /><br />
![weather](https://seanboy.club/uploads/images/2020-05-09~11-56-36~weather.jpg)
- 热点新闻<br /><br />
![news](https://seanboy.club/uploads/images/2020-05-09~11-56-36~news.png)
- 个人中心<br /><br />
![center](https://seanboy.club/uploads/images/2020-05-09~11-56-36~center.jpg)
<br />

## 项目说明
1.```cnpm install```安装所有模块依赖

2.```npm run serve```开发环境下启动项目

3.【注意】若需使用**登录/注册**功能，需先配置环境：
- 构建PHPnow集成环境
> PHPnow集成安装包下载地址： http://servkit.org/download <br />
> PHPnow安装教程：https://jingyan.baidu.com/article/ad310e80ea8acb1849f49eb8.html

- 在phpMyAdmin创建数据库如下（默认用户名和密码见php文件）
```sql
CREATE DATABASE `weather`;
CREATE TABLE `weather`.`users` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`username` VARCHAR( 50 ) NOT NULL ,
`password` VARCHAR( 50 ) NOT NULL 
) ENGINE = MYISAM CHARACTER SET utf8 COLLATE utf8_unicode_ci;
```
- 将项目中的```public/weather```文件夹**剪切**至本地Apache服务器的根目录下（默认端口号为80）
