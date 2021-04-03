const {HttpException} = require('../core/http-exception')
const  catchError = async ( ctx,next)=>{
  try {
    await next()
  } catch (error){

    //开发环境 不是HTTPException
    const isHttpException = error instanceof HttpException
    const isDev =global.config.environment === 'dev'
    if(isDev && !isHttpException){
      throw error
    }

    if(isHttpException){
      ctx.body ={
        msg:error.msg,
        error_code:error.errorCode,
        request:`${ctx.method}  ${ctx.path}`
      }
      ctx.status = error.code
    }
    else {
      //这里处理未知异常
        ctx.body = {
          msg:'说实话，有点懵，这个错误我不知道咋回事！',
          error_code: 999,
          request:`${ctx.method}  ${ctx.path}`
        }
        ctx.status = 500 //代表服务器异常
    }
  }
}

module.exports = catchError