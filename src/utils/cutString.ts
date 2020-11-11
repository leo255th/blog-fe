/**
 * 剪裁一个字符串，如果长度超过15，返回前15个字符，加...三点省略号
 * @param str 需要剪裁的字符串
 * @param length 需要裁减的长度，默认15
 */
export  const cutString=function(str:string,length:number=15){
  if(str.length<=length){
    return str;
  }else {
    return str.slice(0,length)+'...'
  }
}