// merging  two array in sorted order without using extra space

function mergeArraywithoutSpace(arr1, arr2) {
    let n = arr1.length
    let m = arr2.length

    let i = n - 1;
    let j = 0;

    while (i >= 0 && j < m) {
        if (arr1[i] > arr2[j]) {
            let temp = arr1[i];
            arr1[i] = arr2[j];
            arr2[j] = temp;
        }
        i--;
        j++;
    }

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

}

// test case to perform 
let arr1 = [1, 3, 5, 7]  // output [0,1,2,3]
let arr2 = [0, 2, 6, 8, 9]  // output [5,6,7,8,9]

mergeArraywithoutSpace(arr1, arr2);
console.log(arr1)
console.log(arr2)

// output obtained sucessfully