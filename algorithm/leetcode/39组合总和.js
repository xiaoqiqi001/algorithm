var combinationSum = function(candidates, target, prevNum = 0) {
    for (let i = 0; i < candidates.length; i++) {
      if ((prevNum + candidates[i]) <= target) {
        if ((prevNum + candidates[i]) === target) {
          console.log('准备要去循环了', prevNum, candidates[i], prevNum + candidates[i])
        }
        combinationSum(candidates, target, prevNum + candidates[i])
      }
    }
}

// combinationSum()

// var combinationSum = function(candidates, target, curIndex = 0) {
//     console.log('当前参数', candidates, target, curIndex)
//     for (let i = curIndex; i < candidates.length; i++) {
//       if (target % candidates[i] === 0) {
//         console.log('成功le', candidates[i])
//       }
//       for (let j = 0; j < candidates.length; j++) {
//         const element = candidates[j]
//       }
//     }
// }

combinationSum([2,3,6,7], 7)
