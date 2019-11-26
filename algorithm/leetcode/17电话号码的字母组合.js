var allHashNum = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}
var result = []
var letterCombinations = function(digits, prevComine = '') {
  if (digits[prevComine.length]) {
    for (let i = 0; i < allHashNum[digits[prevComine.length]].length; i++) {
      if ((digits.length - 1) === prevComine.length) {
        result.push(prevComine + allHashNum[digits[prevComine.length]][i])
      }
      letterCombinations(digits, prevComine + allHashNum[digits[prevComine.length]][i])
    }
  }
  return result
}

console.log(letterCombinations(""))
