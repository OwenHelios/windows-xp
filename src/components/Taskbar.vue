<template>
  <div class="taskbar">
    <div class="start">
      <img :src="require('../assets/StartButtonIcon.png')" alt="" />
      <a>start</a>
    </div>
    <div class="quick-start"></div>
    <div class="tasks"></div>
    <div class="notif">
      <div class="time">{{ time }}</div>
    </div>
  </div>
</template>

<script>
const date = new Date()

export default {
  name: 'Taskbar',
  props: {
    msg: String,
  },
  data() {
    var time =
      date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    return {
      time,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.taskbar {
  position: absolute;
  width: 100%;
  height: 30px;
  bottom: 0;
  background-color: antiquewhite;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    to bottom,
    #245edb 0%,
    #3f8cf3 9%,
    #245edb 18%,
    #245edb 92%,
    #333 100%
  );
}

.start {
  display: flex;
  font-family: Franklin Gothic;
  font-size: 19px;
  font-style: italic;
  color: #fff;
  text-shadow: 1px 1px 3px rgb(69 76 16), 0px 0px 3px rgb(69 76 16);
  padding: 5px 18px 5px 8px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 10px;
  box-shadow: inset -2px 0 0px #333;
  background: linear-gradient(
    to bottom,
    #379237 0%,
    #6fb26f 9%,
    #379237 18%,
    #379237 92%,
    #333 100%
  );
  cursor: default;
  user-select: none;
}

.start:hover {
  filter: brightness(1.2);
}

.notif {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1398ed;
  color: #fff;
  padding: 5px;
  font-size: 13px;
  background: linear-gradient(
    to bottom,
    #1398ed 0%,
    #19bbf4 9%,
    #1398ed 18%,
    #1398ed 92%,
    #333 100%
  );
  box-shadow: inset 1px 0 2px #333;
}
</style>
