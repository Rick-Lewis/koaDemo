/**
 * Created by xu.long on 2019/5/20.
 */
const Router = require('koa-router');
const operator = require('../mySqlConfig');
const util = require('../../util');

const login = module.exports = new Router({
  prefix: '/home'
});

login.get('/retrieve/:id', async (ctx, next) => {
  // ctx.router available
  console.log('router retrieve', ctx.params);
  ctx.body = await operator.findUserById(ctx.params.id);
}).post('/create', async (ctx, next) => {
  // ctx.router available
  console.log('router create', ctx.request.body);
  if (!!ctx.request.body.username && !!ctx.request.body.password && !!ctx.request.body.phone) {
    let tempPassword = util.md5PasswordGenerator(ctx.request.body.password);
    let temp = Object.assign({}, ctx.request.body, {
      password: tempPassword
    });
    let result = await operator.createUser(temp);
    if (result.code === 0) {
      ctx.status = 200;
      ctx.body = {
        code: 0,
        message: '恭喜您，注册成功'
      }
    } else {
      ctx.status = 500;
      ctx.body = {
        code: -1,
        message: '很抱歉，注册失败'
      }
    }
  }else{
    ctx.status = 500;
      ctx.body = {
        code: -1,
        message: '参数缺失，请检查'
      }
  }

}).put('/update', (ctx, next) => {
  // ctx.router available
  console.log('router put');
}).del('/delete/:id', (ctx, next) => {
  console.log('router del', ctx.params.id);
}).all('/all/:id', (ctx, next) => {
  console.log('router all', ctx.params.id);
});
