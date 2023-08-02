// To find if there is a sub array in the given array has 0 sum or not

function Subarraywithzerosum (arr){

    let sum = 0;
    const prefix = {};
    let result = "No";

    for (let i=0; i<arr.length; i++){
        sum += arr[i];
        if (sum === 0 || prefix[sum]){
            result = "Yes (" + arr.slice(prefix[sum],i+1).join(",") + ")"
            break;
        }
        prefix[sum] = i+1;
    }
return result;
}




// test cases 
 const arr1 = [4, 2, -3, 1, 6] // output Yes(2,-3,1)

const arr2 = [4, 2, 0, 1, 6] // output Yes(0)

console.log(Subarraywithzerosum(arr1));
console.log(Subarraywithzerosum(arr2));

// output obtained sucessfully