/* 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. 
*/

const twoSum = (arr, targetNum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetNum) {
        return [i, j];
      }
    }
  }
  return [i, j];
};

console.log(twoSum([2, 7, 11, 15], 18));

/* 
var twoSum = function(nums, target) {
    // create a new Map
    let map = new Map();
    // loop over the nums
    for (var i = 0; i < nums.length; i++) {
      // store the compliment between current num and the target
	  // if target 10, and num[i] = 6 there is only ONE number that we can add to 6 to make it 10. 
        // That is the number 4. We call it the compliment because it compliments 6 to hit the target 10.
        // EG if target = 10 and nums[i] = 6....  10 - 6 = compliment = 4
        let compliment = target - nums[i];
        // What we are going to do is check if the compliment exists in the hashmap.
        // If the map already contains the compliment we will return an array with the index of the compliment. And current index.
        // When calling map.get(compliment) in the return, this will return the VALUE at that key 
        if ( map.has(compliment)) {
           return [map.get(compliment), i];
           } else {
               // Since the compliment does not exist as a key in the map.
               // We store the key num[i], and index as the value for that key.
               map.set( nums[i] , i)
           }

    }
    // If there is no compliment we will return an empty array. 
return [];
}; */
