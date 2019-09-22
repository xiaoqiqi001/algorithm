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
      mazeMap: [
        [0,0,0,1,1,1],
        [0,1,0,1,1,1],
        [0,1,0,0,0,1],
        [0,1,1,1,0,1],
        [0,0,0,0,0,0]
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
      operators: [
        {x: -1, y: 0},
        {x: 0, y: 1},
        {x: 1, y: 0},
        {x: 0, y: -1}
      ]
    }
  },
  created() {
    this.beginRunMazeMap()
    // this.beginStackMaze()
  },
  components: {
    treeItem
  },
  methods: {
    async beginRunMazeMap () {
      console.log('开始走迷宫了')
      let innerMazeMap = this.mazeMap
      
      let runMaze = async (mazeMap, x, y, level) => {
        console.log('当前x和y的值分别是', x, y)
        if (x === 4 && y === 4) {
          console.log('我到了')
          return false
        }
        for (let index = 0; index < this.operators.length; index++) {
          let resultX = x + this.operators[index]['x']
          let resultY = y + this.operators[index]['y']
          if (resultX >= 0 && resultX <= 4 && resultY >= 0 && resultY <= 4 && mazeMap[resultX][resultY] === 0) {
            this.$set(this.mazeMap[resultX], resultY, 2)
            mazeMap[resultX][resultY] = 2
            // await this.sleep(1000)
            runMaze(mazeMap, resultX, resultY, level + 1)
            console.log('我返回了', index, level, resultX, resultY)
            this.$set(this.mazeMap[resultX], resultY, 0)
            mazeMap[resultX][resultY] = 0
          }
        }
      }
      runMaze(innerMazeMap, 0, 0, 0)
    },
    async beginStackMaze () {
      let diyStack = [{x: 0, y: 0}]

      while (diyStack.length) {
        let {x, y} = diyStack.pop()
        this.$set(this.mazeMap[x], y, 2)
        if (x === 20 && y === 31) {
          console.log('我到了')
          return false
        }
        if ((x - 1) >= 0 && this.mazeMap[x - 1][y] === 0) {
          diyStack.push({x: x - 1, y: y})
        }
        if ((y + 1) <= 31 && this.mazeMap[x][y + 1] === 0) {
          diyStack.push({x: x, y: y + 1})
        }
        if ((x + 1) <= 20 && this.mazeMap[x + 1][y] === 0) {
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
