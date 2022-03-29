<template>
  <div @click="handleClick" class="home">
    <HomeScreen />
    <Taskbar ref="taskbar" :menu-show="menuOpen" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeScreen from '@/components/HomeScreen.vue'
import Taskbar from '@/components/Taskbar.vue'

export default {
  name: 'DesktopView',
  components: {
    HomeScreen,
    Taskbar,
  },
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
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
