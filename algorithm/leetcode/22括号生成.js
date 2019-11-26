var result = []
var generateParenthesis = function(n, prevStr = '', defaultLevel = 1, left = 0, right = 0) {
  if (prevStr === '') {
    result = []
  }
  var patterList = ['(', ')']
  if ((n * 2) < defaultLevel) {
    judgeIsPatter(prevStr) && result.push(prevStr)
    return 
  }
  for(var i = 0; i < patterList.length; i++){
      if (i === 0 && left <= n && right <= n) {
        generateParenthesis(n, prevStr + patterList[i], defaultLevel + 1, left + 1, right)
      } else if (i === 1 && left <= n && right <= n) {
        generateParenthesis(n, prevStr + patterList[i], defaultLevel + 1, left, right + 1)
      }
  }
  if (defaultLevel === 1) {
    return result
  }
}

var judgeIsPatter = function (resultStr) {
  var willJudgeArr = []
  for (let i = 0; i < resultStr.length; i++) {
    if (resultStr[i] === '(') {
      willJudgeArr.push(resultStr[i])
    } else if(willJudgeArr.length === 0) {
      return false
    } else {
      willJudgeArr.pop()
    }
  }
  if (willJudgeArr.length === 0) {
    return true
  } else {
    return false
  }
}

console.log('这里是结果集', generateParenthesis(3))