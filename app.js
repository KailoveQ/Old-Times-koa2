const Koa = require('koa')

const app = new Koa()

function test() {
  console.log('hello,7yue')
}

//注册
app.use((ctx,next)=>{
  //ctx 上下文
  console.log('有个傻子发请求过来了！')
  next()
})

app.use((ctx,next)=>{
  console.log('有个猪八戒发请求过来了！')
  next()
})

app.listen(3000)