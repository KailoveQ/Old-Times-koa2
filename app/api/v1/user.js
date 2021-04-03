const Router = require('koa-router')
const {RegisterValidator} = require('../../validators/validator')
const router = new Router({
  prefix:'/v1/user'
})

//注册
router.post('/register',async(ctx,next)=>{
  //思维路径
  // 接收参数 校验
  const v = new RegisterValidator().validate(ctx,next)
})


module.exports =router