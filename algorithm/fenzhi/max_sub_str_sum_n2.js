// let str = [-2,1,-3,4,-1,2,1,-5,4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxValue = -0xFFFFFFFF
  for (let outIndex = 0; outIndex < nums.length; outIndex++) {
    for (let innerIndex = outIndex; innerIndex < nums.length; innerIndex++) {
      let curValue = getArrSum(nums, outIndex, innerIndex)
      if (curValue > maxValue) {
        maxValue = curValue
      }
    }
  }
  return maxValue
};

var getArrSum = function (num, start, end) {
  let sum = 0
  for (let index = start; index <= end; index++) {
    sum += num[index]
  }
  return sum
}

console.log('最大值', maxSubArray(str))
