
// starting with  O(n^3) 
const cube = (size) =>{  // size === N

    for(let i=0; i < size; i++){ //O(N) loops are automatic O(N) because it depends on whatever N is!
        for(let j=0; j < size; j++){ //O(N)
          for(let k=0; k < size; k++){ //O(N)
            console.log(i, j, k)
          }
        }
    }
  }
  // These loops are nested which means this value must be multiplied: O(N) * O(N) * O(N) === O(N^1 + N^1+ N^1) === O(N^3)
 
  




const visualFactorial = (number) =>{ //number 
    let visual = "";
    let total = 1;

    for(let i = number; i > 0; i--){ //O(N) just to show what a factorial looks like and how fast it scales
        visual += (String(i) + "! ")
        total *= i
    }
    console.log('Visual: ',visual,'total', total)
}






const fibonacci = (n) =>{   //O(2^N-1) but we remove constants so this function is O(2^N)
    let visual = "";
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    visual +=`${n} - ${n-1}`
    console.log(visual)
    return fibonacci(n-1) + fibonacci(n-2)
}
//O(2^N) if n is 4  we start at 4-1 = 3  2^n === 2^3 
//                  fibonacci(4)            
//                  /          \
//              fib(3)       fib(2)         ===  2^1 level 1,  2^1 = 2 function calls at this level
 //           /     \           /     \
 //       fib(2)  fib(1)     fib(1)  fib(0)  === 2^2 level 2,  2^2 = 4 function calls at this level
 //       /    \
 //   fib(1)  fib(0)                         === 2^3 level 3,  2^3 = 8 function calls! counting this one as if it is complete since we focus on the worse case
 

const factorial = (number) =>{
    if(number === 0){
        console.log("*****DONE*****");
        return
    }
    let val = "";
    let num = 1;
    for(let i = 0; i < number; i++){
        val += "factorial("+ number+ ")";
        factorial(i)
        console.log(val)
    }
}

module.exports = {cube, factorial, fibonacci, visualFactorial };
