

const logLinear = (N) =>{
  let originalNValue  = N;
  while(N > 1){ //Loop which is  O(N)
   N = Math.floor(N/2); //while loop value changes to O(log) because we are halving it's value as we keep going back to line 68
   console.log('Value of N before iterating!', N) 
   for(let i = 0; i < originalNValue; i++){
     console.log('we will still be iterating through the complete value of N')
   }
  }
//   while loop === O(Log N)  for loop === O(N)   ===   O(Log N * N) ===>  O(N Log N)
}

//if we hadn't cut the value in half this function would have ran infinitely intead of 10x


// __________________MERGESORT______________________//

const mergeSort = (arr) =>{
  if (arr.length < 2) return arr;

  let middle = Math.floor(arr.length /2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length)
  let result;

  result = merge(mergeSort(left), mergeSort(right))
  console.log('el resultado: ',result);
  return result
}

const merge = (left, right) =>{ //only works on sorted pieces
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // console.log('inside merge')


  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] <  right[rightIndex]){
      result.push(left[leftIndex])
      leftIndex++
      // console.log('result so far[leftIndex is smaller',result)
    }else{
      result.push(right[rightIndex])
      rightIndex++
      // console.log('result so far[rightIndex is smaller',result)
    }
  }
  result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
  // console.log('results are up: ',result);
  return result
}


module.exports = {logLinear, mergeSort};
