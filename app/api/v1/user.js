
const Router = require('koa-router')
const {RegisterValidator} = require('../../validators/validator')
const {User} = require('../../models/user')
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
  User.create(user)
})


module.exports =router