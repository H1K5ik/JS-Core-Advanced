function sumOfFirstAndLast(num){
  let res = num.toString().split('');
  return res.reduce((sum,el,index)=> { if (index===0 || index===res.length-1)  return sum+=+el; else return sum},0);
}
console.log(sumOfFirstAndLast(121231231231235));