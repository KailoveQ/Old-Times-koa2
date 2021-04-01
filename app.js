const Koa = require('koa')

const app = new Koa()

//注册
// app.use(async (ctx,next)=>{
//   //ctx 上下文
//   const a=await next()
//   console.log(a)
//   // a.then((res)=>{
//   //   console.log(res)
//   // })
// })
app.use(async (ctx,next)=>{

  const axios =require('axios')
  const start = Date.now()
  const res =await axios.get('http://bl.talelin.com/v1/classic/latest?appkey=AbhC31IG7ruCDp57')
  const end= Date.now()
  console.log(end-start)
  console.log(res)

  // return 'hello,kai'
})

app.listen(3000)