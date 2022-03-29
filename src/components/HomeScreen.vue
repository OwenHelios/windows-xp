<template>
  <div
    class="home-screen"
    @dragover="handleDrag"
    @contextmenu="handleRightClick"
    @click="handleClick"
  >
    <Window
      @dragstart="handleDragStart"
      :style="{ top: windowTop + 'px', left: windowLeft + 'px' }"
    />
    <!-- <div class="test">
      <drag-select attribute="fire">
        <div v-for="item in [1, 2, 3]" :key="item" :fire="item"></div>
      </drag-select>
    </div> -->
    <ul
      v-if="menuShow"
      class="context-menu"
      ref="contextMenu"
      :style="{ top: menuTop + 'px', left: menuLeft + 'px' }"
    >
      <li><a href="" target="_blank">New Page</a></li>
      <li><a href="#">Refresh</a></li>
      <li>Filler</li>
      <li>Filler</li>
      <li>Filler</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Window from '@/components/Window.vue'
import DragSelect from 'drag-select-vue'

export default {
  name: 'HomeScreen',
  components: {
    Window,
    DragSelect,
  },
  props: {},
  data() {
    return {
      windowLeft: 50,
      windowTop: 50,
      offsetX: 0,
      offsetY: 0,
      menuLeft: 0,
      menuTop: 0,
      menuShow: false,
    }
  },
  methods: {
    handleDrag(e) {
      e.preventDefault()
      e.dataTransfer.dropEffect = 'move'
      this.windowTop = e.clientY - this.offsetY
      this.windowLeft = e.clientX - this.offsetX
    },
    handleDragStart(e) {
      const img = new Image()
      e.dataTransfer.setDragImage(img, 0, 0)
      this.offsetY = e.layerY
      this.offsetX = e.layerX
    },
    handleRightClick(e) {
      e.preventDefault()
      if (e.clientX > window.innerWidth - 111) {
        this.menuLeft = e.clientX - 110
      } else {
        this.menuLeft = e.clientX
      }
      if (e.clientY > window.innerHeight - 161) {
        this.menuTop = e.clientY - 130
      } else {
        this.menuTop = e.clientY
      }
      this.menuShow = true
    },
    handleClick(e) {
      if (this.menuShow) {
        this.menuShow = false
      }
    },
  },
}
</script>

<style>
.home-screen {
  height: 100%;
}

.test {
  position: absolute;
  width: 200px;
  height: 200px;
}

.context-menu {
  padding: 0;
  margin: 0;
  font-size: 14px;
  position: absolute;
  user-select: none;
  background-color: #efeedc;
  text-align: start;
  width: 110px;
  height: 130px;
}

.context-menu li {
  padding: 2px 12px;
  border-bottom: 1px solid rgba(200, 200, 200, 0.5);
}

.context-menu li:hover {
  background-color: rgb(32, 32, 167);
  color: white;
}
</style>
