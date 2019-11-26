let numberArr = [34,23,23,4,3,4,3,43,4,231,312,3,213,12,3,12,31];

// 如果要插入的数据比结果集中的每一个数字都大，就放在结尾
// 如果在其中一个，就从结尾找到合适的位置并插入
// 如果位置是最前面的那个，resultIndex有可能等于-1，要重置回去。
function insertSort () {
  let result = [numberArr[0]]
  for (let index = 1; index < numberArr.length; index++) {
    // 要插入的位置（默认是最后一个）
    let willInsertIndex = result.length
    // 获取结果数组的长度
    let resultIndex = result.length - 1
    // 在结果数组中从后向前一直找，找到一个比当前index小的值
    while(resultIndex >= 0) {
      // 如果结果集中有一个值比要插入的值小，那么它的下一个索引一定是要插入的值的位置
      if (numberArr[index] > result[resultIndex]) {
        break;
      }
      result[resultIndex + 1] = result[resultIndex]
      resultIndex--
    }
    willInsertIndex = resultIndex + 1
    result[willInsertIndex] = numberArr[index]
  }
  return result
}

console.log('这里是结果集：', insertSort())