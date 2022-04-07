

const countDown = (n) =>{ //O(N) depending on the size of the input it'll stack up on the stack
    if(n === 0){
        return;
    }

    console.log(n)
    return countDown(n-1)
}

const twoInputsAdded = (numOne, numTwo) =>{
    let totalRun = 0;
    for(let i = 0; i < numOne; i ++){
        totalRun++; 
        console.log("numOne is running", numOne)
        //nothing is being initialized in here  
    }

    for(let i = 0; i < numTwo; i ++){
        totalRun++;
        console.log("numTwo is running", numTwo)
        //nothing is being initialized in here  
    }
    console.log('total iterations: ',totalRun);
}
const twoInputsMultiplied = (numOne, numTwo) =>{
    let totalRun = 0;
    for(let i = 1; i <= numOne; i ++){
        for(let j = 1; j<= numTwo; j++){
            totalRun++;
            console.log("numOne index: ", i, "numTwo index: ", j);
        //nothing is being initialized in here  
        }
    } 
    console.log('total iterations: ',totalRun);
}


module.exports = {countDown, twoInputsAdded, twoInputsMultiplied};
