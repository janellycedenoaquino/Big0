//_______________________________________________________O(1)____________________________________________________________________________//

const coolName = (name) =>{
    if(name.length >= 1){ 
        //length is a built in property in JS and in most languages. length of name wont matter because the property is O(1)!
        console.log(`cool name!, ${name}`)
    }
}
// coolName("Janelly");
// both will take the same time! O(1)
// coolName("aVeryLongNameLoremIpsumNequeporroquisquamestquidoloremipsumquiadolorsitametconsecteturadipiscivelit");

// O(N) 
const linearTime = (N) =>{
    for(let i = 0; i < N; i++){
        
    }
}

//_______________________________________________________O(log n)____________________________________________________________________________//


//_______________________________________________________O(N)____________________________________________________________________________//
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

let start = 0;
let end = arr.length-1; //initialized after arr is filled
let target = 40;


// findTarget(arr, start, end, target);


//_____________________________________________________O(N log N)____________________________________________________________________________//

// // O(n log n)
// let unsortedArr = [];
// for(let i = 0; i<5; i++){
//   unsortedArr.unshift(i);
// }
// console.log(unsortedArr)
// const mergeSort = (arr)=>{
//   const originalArr = arr
//   let left = arr.splice(0, (originalArr.length/2))
//   let right = arr.splice((originalArr.length/2)-1)
//   console.log('left: ',left,'right: ', right)
//   sort(left);
  
// }

// const sort = (arr) =>{
//   console.log(arr)
//   let sortedArr = [];
//   for(let i = 0; i < arr.length-1; i++){
//     if(!arr[i+1] ){
//       console.log('done', arr[i+1]);
//     }else if(arr[i] > arr[i+1]){
//       console.log("it's greater than: ",arr[i], arr[i+1])
      
//     }
//   }
// }

// mergeSort(unsortedArr);


//_______________________________________________________O(N^3)__________________________________________________________________________//

// O(n^3)                   a complexity this high is never optimal 
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
  
//   cube(3);
