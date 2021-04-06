
const Router = require('koa-router')
const {RegisterValidator} = require('../../validators/validator')
const {User} = require('../../models/user')
const {success} = require('../../lib/helper')
const router = new Router({
  prefix:'/v1/user'
})

//注册
router.post('/register',async(ctx,next)=>{
  //思维路径
  // 接收参数 校验
  const v = await new RegisterValidator().validate(ctx)
  // v.get 获取用户的数据

  const user ={
    email: v.get('body.email'),
    password: v.get('body.password2'),
    nickname: v.get('body.nickname')
  }
  await User.create(user)
  success()
})


module.exports =router