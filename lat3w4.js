// Mencari Median

function cariMedian(arr) {
    var median = 0;
    var middleOfArr = Math.floor(arr.length / 2);
  
    if (arr.length % 2 !== 0){
      median = arr[middleOfArr]; 
    } else {
      median = (arr[middleOfArr] + arr[middleOfArr - 1])/2; // --> ini tadinya median = (arr[middleofAr -1] doang)
    }
    return median;
}

// TEST CASES 
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7 
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5 