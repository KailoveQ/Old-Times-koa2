const Koa = require('koa')

const app = new Koa()

//注册
app.use(async (ctx,next)=>{
  //ctx 上下文
  console.log(1)
  await next()
  const r = ctx.r
  console.log(r)
  console.log(2)
})
app.use(async (ctx,next)=>{
  console.log(3)
  const axios =require('axios')
  const res =await axios.get('http://bl.talelin.com/v1/classic/latest?appkey=AbhC31IG7ruCDp57')
  ctx.r = res
  await next()
  console.log(4)
  // return 'hello,kai'
})

app.listen(3000)