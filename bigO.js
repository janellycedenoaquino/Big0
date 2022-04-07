const coolName = require('./constantTime.js')
const {linearTime, findTarget} = require('./linearTime.js')
const logarithmicTime = require('./logarithmicTime.js')
const {logLinear, mergeSort} = require('./logLinearTime')
const {cube, factorial, fibonacci, visualFactorial} = require('./badSolutions')
const {countDown, twoInputsAdded, twoInputsMultiplied} = require('./spaceComplexity')


//_______________________________________________________O(1)____________________________________________________________________________//
//O(1) complexity, to check the code visit file ====>  constantTime.js


// coolName("Janelly");
// both will take the same time! O(1)
// coolName("aVeryLongNameLoremIpsumNequeporroquisquamestquidoloremipsumquiadolorsitametconsecteturadipiscivelit");


//_______________________________________________________O(log n)____________________________________________________________________________//
//O(log n) complexity, to check the code visit file ====>  logarithmicTime.js
// logarithmicTime()



//_______________________________________________________O(N)____________________________________________________________________________//
//O(N) complexity, to check the code visit file ====>  linearTime.js


// linearTime(10)
// linearTime(100) 
// linearTime(1000)
//depends on the size of the input which is why it is o(n)
// the larger the input the larger it grows


//findTargetFunction given a number it will attempt to find it in a sorted array of numbers
// let start = 0;
// let target = 40;
// let arr = [10,20,22,35,40,44,47,52]
// let end = arr.length-1; //initialized after arr is filled

// findTarget(arr, start, end, target);


//_____________________________________________________O(n log n)____________________________________________________________________________//
//O(n log n) complexity, to check the code visit file ====>  logLinearTime.js

// logLinear(5); 
// logLinear(25); 
// logLinear(15); 
//slices value in half every time the function runs resulting in 5 not having to run 25 times total
//but instead instead the nested loop halfing one of the loops every iteration

// __________________MERGESORT______________________// O(n log n)

// let unsortedArr = [];
// for(let i = 1; i<25; i++){
//   unsortedArr.unshift(i);
// }

// mergeSort(unsortedArr)

// mergeSort([1,3,5,7,2,4,6,8,9])
// mergeSort([9,7,5,3,1,2,4,6,8])


//_______________________________________________________O(N^2 to O(N!))_________________________________________________________________//
//for complexities higher than O(n log n) visit file ====>  badSolutions.js

// cube(3);
// factorial(3)
// visualFactorial(4) /* Huge difference in growth only four numbers apart */  
// visualFactorial(8)
// fibonacci(5)

// visit file ====>  spaceComplexity.js
// twoInputsAdded(5,2) // runs 7 times O(a + b) === O(a + b)  Because they are two different inputs and won't mix
// twoInputsMultiplied(5,2) //runs 10 times O(a * b) === O(a * b)



//_______________________________________________________SPACE COMPLEXITY________________________________________________________________//

// countDown(3); //O(N)
// twoInputsAdded(5,2)          // O(1) there aren't any variables initialized inside the for loop
// twoInputsMultiplied(5,2)     // O(1) there aren't any variables initialized inside the for loop

