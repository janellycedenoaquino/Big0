
//_______________________________________________________O(N)____________________________________________________________________________//

const linearTime = (N) =>{ //It will always depend of the size of the input if N = 1 then the big O is O(1). 
    //big O is always worse case scenario thus we have to think about the worse input... whatever large value N could possibly be
    let zero = "";
      for(let i = 0; i < N; i++){
          zero += `\n${N*i}`;
      }
      console.log(zero);
  }





const findTarget = (arr, start, end, target) => {
    let mid = Math.floor((start + end)/2)
  
    console.log("array value: ",arr.slice(start, end), "\n\n") //for every recursive iteration we see the array halving 
  
  
    if(start > end) {// when the start get's to a point that it is larger than the end we don't have any more to search because the value does not exist 
      console.log('\n\ndid not find it =( ') 
      return false
    };
  
    if(arr[mid] === target){
      console.log('found it! ', arr[mid])
      return true;
    
    }else if(arr[mid] < target) {
        console.log("the target is larger let's move up! \nthe number we landed on:", arr[mid], "\n\n"); //visually showing the number we landed on 
        findTarget(arr, mid + 1, end, target) //recursive changing the start for the mid because this is our new starting point   
        //the reason this function is O(log n) because we half it every time we call the function over new start point makse it so that we half the initial array
    
    }else if(arr[mid] > target) {
        console.log("the target is smaller let's move down! \nthe number we landed on:", arr[mid], "\n\n");
        findTarget(arr, start, mid, target)
        //both conditionals cut array in half making it logarithm base! 
    }
  }
  
  let arr = [];
  for(let i = 0; i<100; i++){ //generate sorted large array
      arr.push(i);
    }
  
module.exports = {linearTime, findTarget};