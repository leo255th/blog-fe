/**
 * 
 * @param vn 传入运行该函数的组件的this指针
 * @param res 传入要检查的graphql查询/更改结果
 */
export const checkErros=function(vn:any,res:any,namespace:string){
  if(res.errors){ // 通常是服务器挂了
    vn.$message.error('服务器发生未知错误')
    return false;
  }else if(!res.data[namespace].res.done){
    // 业务逻辑错误
    vn.$message.error(res.data[namespace].res.errMsg)
    return false;
  }
  return true;
}