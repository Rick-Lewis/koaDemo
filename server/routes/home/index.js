/**
 * Created by xu.long on 2019/5/20.
 */
const Router = require('koa-router');
const operator = require('../mySqlConfig');

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
  ctx.body = await operator.createUser(ctx.request.body);
  // ctx.status = 200;
  // ctx.body = {
  //   code: 0,
  //   message: 'login success'
  // }
}).put('/update', (ctx, next) => {
  // ctx.router available
  console.log('router put');
}).del('/delete/:id', (ctx, next) => {
  console.log('router del', ctx.params.id);
}).all('/all/:id', (ctx, next) => {
  console.log('router all', ctx.params.id);
});
