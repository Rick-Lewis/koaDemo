/* 
* @Author: xu.long   
* @Date: 2019-07-23 20:45:39   
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-07-23 21:03:35
*/
const crypto = require('crypto');
const md5 = crypto.createHash('md5');

const salt = 'xyz';

//生成md5加盐密码
const md5PasswordGenerator = (val) => {
    let temp = salt + val.slice(0, 1) + ':' + val;
    return md5.update(temp).digest('hex');
};

module.exports = {
    md5PasswordGenerator
}