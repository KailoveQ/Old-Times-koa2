async function fun1() {
  try {
    await fun2()
  }catch (error) {
    throw error
  }

}
async function fun2() {
  try {
    await fun3()
  }catch (error) {
    console.log(error)
  }
}

function fun3() {
   return new Promise((resolve,reject)=>{
     setTimeout(function (){
       const r = Math.random()
       if(r< 0.5){
         reject('err')
       }
     })
   })
}

fun1()

//没有异常；没有异常，不需要返回结果
// 发生了异常

//  函数设计
//  判断出异常，return false
// 抛出异常