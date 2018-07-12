//引入数据库方法--构建新的数据表users
const db = require('../auth').db;
exports.OnConnected = require('../auth').OnConnected;

const onConnect = function () {
    const mongolass = db.mongolass;

    //===============DEVICE RELATED==================

    // socket.io room. Connect it with `http://{server}/{roomId}`
    db.user = mongolass.model('user', {
        nickname:{type:'string'},
    });

};

exports.OnConnected(onConnect);
exports.db = db;


