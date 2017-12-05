# TestDemo

node版本：8.9.1

---
前端使用技术：
1. vue
2. webpack
3. sass
4. express
---

补充要点：
1. 修改title
2. 接入express（只有显示的数据）
3. 使用MongoDB保存了user.vue的数据

---
启动方式
1. 在根目录执行```npm install```下载依赖
2. 在根目录执行```npm run dev```启动项目
3. 在浏览器地址栏输入```localhost:4000```
4. 启动MongoDB数据库```mongod --config /usr/local/etc/mongod.conf```(Mac操作系统下)
5. 连接mongoDB```mongo```
6. 创建数据库```use blog```
7. 插入数据
```
db.users.insert({"userName":"张三", "visitorsNum": 2, "QRCode": "/imgs/ewm.png", "cardId": "02123213", "payType": "医保"})
WriteResult({ "nInserted" : 1 })
```