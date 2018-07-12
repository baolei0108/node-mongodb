//创建数据库，并连接

const Mongolass = require('mongolass');
const mongolass = new Mongolass();
//mongolass.connect('mongodb://localhost:27017/baotest') //建立数据库baotest

exports.db = {mongolass: mongolass };
const db = exports.db;

let connected = [];
exports.OnConnected = function (fn) {
    if(fn) {
        connected.push(fn);
    }
}

//mongodb://localhost:27017/testdb     并添加hellos表格
exports.connectDB = function (conn) {
    return mongolass.connect(conn).then(function() {
        db.test = mongolass.model('hello', {
            name:{type:'string'},
        });

        db.test.insert({name:'test-hello'}).exec()
 
        connected.forEach(function(oneFn) {
            if(oneFn) {
                oneFn();

            }

        });
    });

};

