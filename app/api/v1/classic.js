const Router = require('koa-router')
const router = new Router()

router.post('/v1/:id/classic/latest',(ctx,next)=>{
  const path = ctx.params
  const query = ctx.request.query  //问号后面的查询参数
  const headers = ctx.request.header
  const body = ctx.request.body
  ctx.body = {
    key:'classic'
  }
})

module.exports = router