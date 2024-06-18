function findUnique(str){
  return str.split('').find((el)=>str.indexOf(el)===str.lastIndexOf(el))
}
console.log(findUnique('aassasdasdgdsadsa'));