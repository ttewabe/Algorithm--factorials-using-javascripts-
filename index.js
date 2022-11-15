const factorial = (n) => {
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(let i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}
let n =5;
x = factorial(n)
console.log("The factorial of " + n + " is " + x);