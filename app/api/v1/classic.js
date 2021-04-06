const Router = require('koa-router')
const router = new Router({
  prefix:'/v1/classic'
})

const {PositiveIntegerValidator} = require('../../validators/validator')
const {Auth} = require('../../../middlewares/auth')

router.get('/latest',new Auth().m,async (ctx,next)=>{
  // const path = ctx.params
  // const query = ctx.request.query  //问号后面的查询参数
  // const header = ctx.request.header
  // const body = ctx.request.body
  //
  // require('../../models/user')
  // const v =await new PositiveIntegerValidator().validate(ctx)
  // const id = v.get('path.id')
  // ctx.body = '成功'

})

module.exports = router