function sum(arr){
  return arr.reduce((sum, el)=>sum+=el**2, 0)
}
console.log(sum([1,2,3,4,5]));