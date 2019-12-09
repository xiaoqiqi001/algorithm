let numberArr = [34,23,23,4,3,4,3,43,4,231,312,3,213,12,3,12,31];

function mergeSort (arr, leftIndex, rightIndex) {
  if (leftIndex === rightIndex) {
    return
  }
  let middleIndex = leftIndex + parseInt((rightIndex - leftIndex) / 2)
  mergeSort(arr, leftIndex, middleIndex)
  mergeSort(arr, middleIndex + 1, rightIndex)
  // 关键在合并的时候，合并的时候每一个子集的操作都是相同的
  merge(arr, leftIndex, middleIndex, rightIndex)

  return arr
}

// 上面在分割的时候，将数组区间大小分成了一个，所以在合并的时候是以一个开始合并的，所以在合并的过程中，每个区间都是有序的。
// 所以合并的过程约等于合并两个有序数组
function merge (arr, leftIndex, middleIndex, rightIndex) {
  let tempArr = [], p1 = leftIndex, p2 = middleIndex + 1
  while (p1 <= middleIndex && p2 <= rightIndex) {
    tempArr.push(arr[p1] < arr[p2] ? arr[p1++] : arr[p2++])
  }

  // 被留下的肯定是这个区间的最后一些数据比另一个区间所有数据都大，所以另一个区间的值都合并进去了，这个区间的值还没有合并完。
  while(p1 <= middleIndex) {
    tempArr.push(arr[p1++])
  }

  while(p2 <= rightIndex) {
    tempArr.push(arr[p2++])
  }

  for (let index = leftIndex; index <= rightIndex; index++) {
    arr[index] = tempArr.shift()
  }
}

console.log('排序结果', mergeSort(numberArr, 0, numberArr.length - 1))
