let numberArr = [34,23,23,4,3,4,3,43,4,231,312,3,213,12,3,12,31];
// 快速排序是把数组中的一个元素挪到它排好序时应该所处的位置
// 沿着某个边界一直找，找到要挪动（比分界值大或者小）的值，放在相反的边界当前索引上，相反边界索引向前/向后走，直到两边的索引相等，就是这个分割值所处的位置
function quickSort (leftBound, rightBound) {
  if (leftBound >= rightBound) {
    return false
  }
  let diviceValue = numberArr[leftBound], leftIndex = leftBound, rightIndex = rightBound
  while(leftIndex < rightIndex) {
    // 如果右边的值小于分割值，就把这个值放在分割值的索引上，如果大于分割值就一直向前走，直到rightIndex <= leftIndex
    while(leftIndex < rightIndex) {
      if (numberArr[rightIndex] < diviceValue) {
        numberArr[leftIndex] = numberArr[rightIndex]
        // 这是leftIndex肯定是满足情况的，就不需要再处理这个值了，自动++
        leftIndex++
        break
      }
      rightIndex--
    }
    while(leftIndex < rightIndex) {
      if (numberArr[leftIndex] > diviceValue) {
        numberArr[rightIndex] = numberArr[leftIndex]
        rightIndex--
        break
      }
      leftIndex++
    }
  }
  numberArr[rightIndex] = diviceValue
  quickSort(leftBound, rightIndex)
  quickSort(rightIndex + 1, rightBound)
}

quickSort(0, numberArr.length - 1)

console.log('最后的结果集：', numberArr)
