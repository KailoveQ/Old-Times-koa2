const Koa = require('koa')
const requireDirectory = require('require-directory')
const Router = require('koa-router')

const app = new Koa()

requireDirectory(module,'./api',{
    visit: whenLoadModule
})

function whenLoadModule(obj){
  if (obj instanceof Router){
    app.use(obj.routes())
  }
}
app.listen(3000)