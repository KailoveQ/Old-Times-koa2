const Router = require('koa-router')
const router = new Router()
const {HttpException} = require('../../../core/http-exception')

router.post('/v1/:id/classic/latest',(ctx,next)=>{
  const path = ctx.params
  const query = ctx.request.query  //问号后面的查询参数
  const headers = ctx.request.header
  const body = ctx.request.body

  if (true){
    const error = new HttpException('为什么错误',10009,200)
    throw error
  }

  ctx.body = {
    key:'classic'
  }

})

module.exports = router