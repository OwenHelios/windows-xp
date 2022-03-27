<template>
  <div class="home" @dragover="handleDrag">
    <div class="home-screen">
      <Window
        @dragstart="handleDragStart"
        :style="{ top: top + 'px', left: left + 'px' }"
      />
    </div>
    <Taskbar msg="Welcome to Your Vue.js App" />
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
      left: 200,
      top: 50,
      offsetX: 0,
      offsetY: 0,
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
  },
}
</script>

<style>
.home {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/wallpaper.jpg');
  background-size: cover;
  position: relative;
}
</style>
