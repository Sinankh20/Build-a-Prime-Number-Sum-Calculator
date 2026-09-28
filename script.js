function sumPrimes(n){
  let result=5
  let prime=[2,3,5,7]
  if (n<2){
    return 0
  }else if(n===2){
    return 2
  }
  let isPrime=true
  for (let i=5;i<=n;i++){
  isPrime= prime.every((no)=>{
    if (i===no){
      return true
  }
    return i%no!==0
  }
  )
  if (isPrime===true){
    result+=i
    prime.push(i)
  }
  }
  return result
}
console.log(sumPrimes(977))