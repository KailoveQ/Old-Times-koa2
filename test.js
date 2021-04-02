function fun1() {
  try {
    fun2()
  }catch (error) {
    throw error
  }

}
function fun2() {
  try {
    fun3()
  }catch (error) {
    throw error
  }
}

function fun3() {
  try{
    1/a
  }catch (error){
    throw error
  }
  return 'success'
}

console.log(fun3())

//没有异常；没有异常，不需要返回结果
// 发生了异常

//  函数设计
//  判断出异常，return false
// 抛出异常