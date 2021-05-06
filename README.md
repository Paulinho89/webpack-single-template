# 项目介绍
从0到1手把手带你捋一套webpack+vue单页项目模板
# 项目目录

```
├── build
│   ├── proxy.js                       // 开发环境代理配置（用于跟后端联调进行代理）
│   ├── dev-server.js                  // 开发环境热更新配置
│   ├── webpack.config.dev.js          // 开发环境配置
│   ├── webpack.config.test.js         // 测试环境配置
│   ├── webpack.config.prod.js         // 生产环境配置
│   ├── webpack.config.base.js         // 基础配置
│   ├── plugins.js                     // 插件配置
├── package.json                       // 包管理配置
├── index.html                         // 入口html
├── babelrc                            // babel配置
├── gitignore                          // gitignore配置
├── eslintrc                           // eslintrc配置
├── README                             // README.md
└── src
    ├── api                            // 项目api
    ├── router                         // 页面路由
    ├── images                         // 图片
    ├── fonts                          // 字体
    ├── styles                         // 样式
    ├── store                          // 状态管理
    ├── config                         // 项目配置
    ├── utils                          // 工具类
    ├── components                     // 公共组件
    │   ├── button.vue
    ├── main.js                        // 入口文件
    ├── page                           // 页面模块
    │   ├── index.vue
```

# 项目启动

```js
npm run dev
```
# 项目打包

```js
npm run test // 测试环境
npm run prod // 生产环境
```
