// largest possible araa of a reactangle in histogram 


function largestArea(argument) {

    let maxArea = 0;

    for (let i = 0; i < argument.length; i++) {

        let minHeight = argument[i];
        for (let j = i; j < argument.length; j++) {
            minHeight = Math.min(minHeight, argument[j]);
            maxArea = Math.max(maxArea, minHeight * (j - i + 1))
        }
    }
return maxArea;
 
}



// solving the given examples in the file 

const arr1 = [6,2,5,4,5,1,6] // output 12
const arr2 = [7,2,8,9,1,3,6,5] // output 16


console.log(largestArea(arr1))
console.log(largestArea(arr2))

// output obtained sucessfully