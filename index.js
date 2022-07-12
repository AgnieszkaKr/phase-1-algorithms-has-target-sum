function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0; i<array.length; i++){
    for(let j=i+1; j<=array.length;){
      if (array[j]+array[i]===target){
        return true
      } else{
        return false
      }
    }
  }
}




/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  [1, 2, 5, 6, 7] 12
  for(let i = 0; i<arr.length; i++){
    if(arr.include(target-arr[i]){
      return array[i], target-arr[1] }
    
  }
12 -1 => if arr contains 10 - yes return 





*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
