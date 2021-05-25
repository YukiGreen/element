## Install
```shell
npm install element-ui -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import Element from 'element-ui'

Vue.use(Element)

// or
import {
  Select,
  Button
  // ...
} from 'element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```
For more information, please refer to [Quick Start](http://element.eleme.io/#/en-US/component/quickstart) in our documentation.

## Browser Support
Modern browsers and Internet Explorer 10+.

## Development
Skip this part if you just want to use Element.

For those who are interested in contributing to Element, please refer to our contributing guide ([中文](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.zh-CN.md) | [English](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.en-US.md) | [Español](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.es.md) | [Français](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.fr-FR.md)) to see how to run this project.

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/ElemeFE/element/releases).

## FAQ
We have collected some [frequently asked questions](https://github.com/ElemeFE/element/blob/master/FAQ.md). Before reporting an issue, please search if the FAQ has the answer to your problem.

## Contribution
Please make sure to read the contributing guide ([中文](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.zh-CN.md) | [English](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.en-US.md) | [Español](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.es.md) | [Français](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.fr-FR.md)) before making a pull request.

## Special Thanks
English documentation is brought to you by SwiftGG Translation Team:
- [raychenfj](https://github.com/raychenfj)
- [kevin](http://thekevin.cn/)
- [曾小涛](https://github.com/zengxiaotao)
- [湾仔王二](https://github.com/wanzaiwanger)
- [BlooDLine](http://www.ibloodline.com/)
- [陈铭嘉](https://chenmingjia.github.io/)
- [千叶知风](http://mpc6.com/)
- [梁杰](http://numbbbbb.com)
- [Changing](https://github.com/sunzhuo11)
- [mmoaay](https://github.com/mmoaay)

Spanish documentation is made possible by these community developers:
- [adavie1](https://github.com/adavie1)
- [carmencitaqiu](https://github.com/carmencitaqiu)
- [coderdiaz](https://github.com/coderdiaz)
- [fedegar33](https://github.com/fedegar33)
- [Gonzalo2310](https://github.com/Gonzalo2310)
- [lesterbx](https://github.com/lesterbx)
- [ProgramerGuy](https://github.com/ProgramerGuy)
- [SantiagoGdaR](https://github.com/SantiagoGdaR)
- [sigfriedCub1990](https://github.com/sigfriedCub1990)
- [thechosenjuan](https://github.com/thechosenjuan)

French documentation is made possible by these community developers:
- [smalesys](https://github.com/smalesys)
- [blombard](https://github.com/blombard)

## Join Discussion Group

Scan the QR code using [Dingtalk App](https://www.dingtalk.com/) to join in discussion group :

<img alt="Join Discusion Group" src="https://user-images.githubusercontent.com/17680888/93177882-0ae92d80-f766-11ea-870d-3fa2d7f06454.png" width="300">


## 问题
1、element-ui项目克隆就需要10分钟
2、安装依赖：使用 yarn 报错， 使用 npm install 即可， 然后执行npm run dev可启动一个element-ui的官网
3、执行命令`npm run add:component apple 苹果`就可创建一个 apple的组件相关文件（`"add:component": "node build/bin/new.js",`）`<component-name> [中文]`


## package.json中命令解析
```
安装依赖
"bootstrap": "yarn || npm i", 

构建文件，分别是生成字体图标名称数组的json文件，插件入口文件；国际化文件，版本文件；
"build:file": "node build/bin/iconInit.js & node build/bin/build-entry.js & node build/bin/i18n.js & node build/bin/version.js",

// theme文件打包
"build:theme": "node build/bin/gen-cssfile && gulp build --gulpfile packages/theme-chalk/gulpfile.js & cp-cli packages/theme-chalk/lib lib/theme-chalk",

// 设置环境变量 BABEL_ENV=utils，编译整个src目录并使用——out-dir或-d将其输出到lib目录。这不会覆盖lib中的任何其他文件或目录。忽略src/index.js
"build:utils": "cross-env BABEL_ENV=utils babel src --out-dir lib --ignore src/index.js",


// 生成lib/umd/locale/xx.js文件,比如zh-CN.js
"build:umd": "node build/bin/build-locale.js",

// 清除lib packages/*/lib  test/**/coverage 文件夹
"clean": "rimraf lib && rimraf packages/*/lib && rimraf test/**/coverage",

// 自动生成图标json，插件入口，国际化，版本文件；设置环境变量为生产模式，使用webpack.demo.js打包构建，并写入一个文件？
"deploy:build": "npm run build:file && cross-env NODE_ENV=production webpack --config build/webpack.demo.js && echo element.eleme.io>>examples/element-ui/CNAME",


// 设置环境变量为生产模式，使用webpack.extension.js打包
"deploy:extension": "cross-env NODE_ENV=production webpack --config build/webpack.extension.js",


// 删除examples/extension/dist， 并设置环境变量为开发模式 使用build/webpack.extension.js打包
"dev:extension": "rimraf examples/extension/dist && cross-env NODE_ENV=development webpack --watch--config build/webpack.extension.js",


// 构建element主页官网效果；根据tpl模板构建前端页面？
"dev": "npm run bootstrap && npm run build:file && cross-env NODE_ENV=development webpack-dev-server--config build/webpack.demo.js & node build/bin/template.js",

// PLAY_ENV=true并根据build/webpack.demo.js打包
"dev:play": "npm run build:file && cross-env NODE_ENV=development PLAY_ENV=true webpack-dev-server--config build/webpack.demo.js",

// 清除、校验 并根据build/webpack.conf.js、webpack.common.js、webpack.component.js 等打包
"dist": "npm run clean && npm run build:file && npm run lint && webpack --config build/webpack.conf.js&& webpack --config build/webpack.common.js && webpack --config build/webpack.component.js && npm run build:utils && npm run build:umd && npm run build:theme",

// 生成一系列的examples/pages/zh-CN/guide.vue等
"i18n": "node build/bin/i18n.js",

// 校验
"lint": "eslint src/**/* test/**/* packages/**/* build/**/* --quiet",

// 发布到仓库
"pub": "npm run bootstrap && sh build/git-release.sh && sh build/release.sh && node build/bingen-indices.js",

// 测试
"test": "npm run lint && npm run build:theme && cross-env CI_ENV=/dev/ BABEL_ENV=test karma start testunit/karma.conf.js --single-run",

// 测试：watch
"test:watch": "npm run build:theme && cross-env BABEL_ENV=test karma start test/unit/karma.conf.js"
```