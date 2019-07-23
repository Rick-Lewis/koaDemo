/**
 * Created by xu.long on 2019/7/16.
 */
//引入mysql模块
var mysql = require("mysql");
//引入文件
var dbConfig = require('../dbConfig');
//使用DBConfig中配置信息创建一个MySQL连接池
var pool = mysql.createPool( dbConfig.mysql );
//查询方法
module.exports = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              err.code = -1;
              err.message = 'failure'
              reject(err);
            } else {
              rows.code = 0;
              rows.message = 'success';
              resolve(rows);
            }
            connection.release();
          })
        }
      })
    });
  },
  findUserById: function (id) {
    let temp = `select * from user where id="${id}" `;
    return this.query(temp);
  },
  createUser: function (param) {
    let temp = `insert into user(username, password, phone) values ('${param.username}', '${param.password}', '${param.phone}')`;
    console.log(temp);
    return this.query(temp);
  }
};
// pool.getConnection(function (err, connection) {
//   connection.query(sql.queryUser, function (err, result) {
//     console.log('The user is: ', results[0].nickName);
//     connection.release();//释放链接
//   });
// })