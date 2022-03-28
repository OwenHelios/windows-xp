<template>
  <div @click="handleClick" class="home" @dragover="handleDrag">
    <div class="home-screen">
      <Window
        @dragstart="handleDragStart"
        :style="{ top: top + 'px', left: left + 'px' }"
      />
    </div>
    <Taskbar ref="taskbar" :menu-show="menuOpen" />
  </div>
</template>

<script>
// @ is an alias to /src
import Taskbar from '@/components/Taskbar.vue'
import Window from '@/components/Window.vue'

export default {
  name: 'DesktopView',
  components: {
    Taskbar,
    Window,
  },
  data() {
    return {
      left: 50,
      top: 50,
      offsetX: 0,
      offsetY: 0,
      menuOpen: false,
    }
  },
  methods: {
    handleDrag(e) {
      e.preventDefault()
      e.dataTransfer.dropEffect = 'move'
      this.top = e.clientY - this.offsetY
      this.left = e.clientX - this.offsetX
    },
    handleDragStart(e) {
      const img = new Image()
      e.dataTransfer.setDragImage(img, 0, 0)
      this.offsetY = e.layerY
      this.offsetX = e.layerX
    },
    handleClick(e) {
      const startIsClicked = this.$refs.taskbar.$refs.start.contains(e.target)
      if (!this.menuOpen) {
        if (startIsClicked) {
          this.menuOpen = true
        }
        return
      } else if (!startIsClicked) {
        this.menuOpen = false
      }
    },
  },
}
</script>

<style>
.home {
  width: 100%;
  height: 100%;
  background-image: url('../assets/wallpaper.jpg');
  background-size: cover;
  position: relative;
}
</style>
