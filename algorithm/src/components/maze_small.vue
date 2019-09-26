<template>
  <div class="maze-container">
    <div>
      <div v-for="(lineItem, lineIndex) in mazeMap" :key="lineIndex" class="maze-wrapper">
        <div class="item" v-for="(item, index) in lineItem" :class="itemClass[item]" :key="index"></div>
      </div>
    </div>
    <!-- <treeItem /> -->
  </div>
</template>
<script>
import treeItem from  './treeItem'
export default {
  data () {
    return {
      // 迷宫的相关数组
      mazeMap: [
        [0,0,0,1,1],
        [0,1,0,1,1],
        [0,1,0,0,0],
        [0,1,1,1,0],
        [0,0,0,0,0]
      ],
      path: {
        x: 0,
        y: 1
      },
      itemClass: [
        'white',
        'black',
        'pink'
      ],
      // 定义四个方向，分别是上右下左
      operators: [
        {x: -1, y: 0},
        {x: 0, y: 1},
        {x: 1, y: 0},
        {x: 0, y: -1}
      ]
    }
  },
  created() {
    // this.beginRunMazeMap()
    this.beginStackMaze()
    // this.shortestRoad()
  },
  components: {
    treeItem
  },
  methods: {
    async beginRunMazeMap () {
      console.log('开始走迷宫了')
      let innerMazeMap = this.mazeMap
      
      /**
       * @function 走迷宫的函数
       * @param {Number} x 当前迷宫的纵坐标
       * @param {Number} y 当前迷宫的横坐标
       * @param {Number} level 当前所走的步数
       */
      let runMaze = async (mazeMap, x, y, level) => {
        console.log('当前x和y的值分别是', x, y)
        if (x === 4 && y === 4) {
          this.$set(this.mazeMap[x], y, 2)
          mazeMap[x][y] = 2
          console.log('我到了')
          return false
        }
        // 从四个方向开始尝试
        for (let index = 0; index < this.operators.length; index++) {
          let resultX = x + this.operators[index]['x']
          let resultY = y + this.operators[index]['y']
          // 如果没有越界，而且当前坐标是可以走的
          if (resultX >= 0 && resultX <= 4 && resultY >= 0 && resultY <= 4 && mazeMap[resultX][resultY] === 0) {
            // 设置坐标值为2
            this.$set(this.mazeMap[resultX], resultY, 2)
            mazeMap[resultX][resultY] = 2
            // await this.sleep(1000)
            runMaze(mazeMap, resultX, resultY, level + 1)
          }
        }
      }
      runMaze(innerMazeMap, 0, 0, 1)
    },
    shortestRoad() {
      console.log('开始走迷宫了')
      let innerMazeMap = this.mazeMap
      let tempStack = []
      let minStack = []
      let minSize = 9999
      
      let runMaze = async (mazeMap, x, y, level) => {
        // console.log('当前x和y的值分别是', x, y)
        if (x === 4 && y === 4) {
          if (level <= minSize) {
            minSize = level
            minStack = JSON.parse(JSON.stringify(tempStack))
          }
          console.log('我到了')
          return false
        }
        for (let index = 0; index < this.operators.length; index++) {
          let resultX = x + this.operators[index]['x']
          let resultY = y + this.operators[index]['y']
          if (resultX >= 0 && resultX <= 4 && resultY >= 0 && resultY <= 4 && mazeMap[resultX][resultY] === 0) {
            tempStack.push({x: resultX, y: resultY})
            this.$set(this.mazeMap[resultX], resultY, 2)
            mazeMap[resultX][resultY] = 2
            // await this.sleep(1000)
            runMaze(mazeMap, resultX, resultY, level + 1)
            tempStack.pop()
            this.$set(this.mazeMap[resultX], resultY, 0)
            mazeMap[resultX][resultY] = 0
          }
        }
      }
      // 现将初始值压入栈中
      tempStack.push({x: 0, y: 0})
      runMaze(innerMazeMap, 0, 0, 0)
      console.log('最短路', minStack)
      minStack.forEach((item) => {
        this.$set(this.mazeMap[item.x], item.y, 2)
      })
    },
    async beginStackMaze () {
      let diyStack = [{x: 0, y: 0}]

      while (diyStack.length) {
        let {x, y} = diyStack.pop()
        this.$set(this.mazeMap[x], y, 2)
        if (x === 4 && y === 4) {
          console.log('我到了')
          continue
          // return false
        }
        if ((x - 1) >= 0 && this.mazeMap[x - 1][y] === 0) {
          diyStack.push({x: x - 1, y: y})
        }
        if ((y + 1) <= 4 && this.mazeMap[x][y + 1] === 0) {
          diyStack.push({x: x, y: y + 1})
        }
        if ((x + 1) <= 4 && this.mazeMap[x + 1][y] === 0) {
          diyStack.push({x: x + 1, y: y})
        }
        if ((y - 1) >= 0 && this.mazeMap[x][y - 1] === 0) {
          diyStack.push({x: x, y: y - 1})
        }
        console.log('当前栈的内容', diyStack)
        await this.sleep(100)
      }
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }
}
</script>
<style lang="scss">
  .maze-container {
    .maze-wrapper {
      display: flex;
      .item {
        width: 20px;
        height: 20px;
        border: 1px solid #000;
      }
      .black {
        background: rgba(39, 37, 38, 0.6);
      }
      .white {
        background: #fff;
      }
      .pink {
        background: pink;
      }
    }
  }
</style>
