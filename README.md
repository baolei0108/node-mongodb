# node-mongodb
node.js + mongdb 主要实现了连接mongodb，并建立数据库和数据表，并插入数据


myapp/auth/mongo_base.js 和 index.js 是封装了连接数据库和建立数据库表的操作

建立新的数据库，需要在bin/www中，添加如下，建立baotestDB数据库：
require('../auth/mongo_base').connectDB('mongodb://localhost:27017/baotestDB');


myapp/models/users.js 引用了 myapp/auth/index.js 
myapp/models/users.js主要完成了建立users表（mongodb默认在user+s）

myapp/routes/users.js则引用了myapp/models/users.js
完成了对建立的users表格的引用，并进行处理，dbTable.insert（）进行了数据插入


以上完成了对数据库的新建数据库、新建数据插入表、插入数据的操作。



