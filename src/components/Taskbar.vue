<template>
  <div class="taskbar" @contextmenu="handleRightClick">
    <div ref="start" class="start" :class="{ 'menu-open': menuShow }">
      <button class="start-btn">
        <img :src="require('../assets/StartButtonIcon.png')" alt="" />
        <span>start</span>
      </button>
      <div v-if="menuShow" class="start-menu">
        <div class="header"><img src="" alt="" /><span>John Doe</span></div>
        <div class="menu-content">
          <div class="content-left">
            <div class="tab">
              <img src="" alt="" />
              <div class="info">
                <span class="title">Internet</span>
                <span class="desc">Internet Explorer</span>
              </div>
            </div>
            <div class="tab">
              <img src="" alt="" />
              <div class="info">
                <span class="title">E-mail</span>
                <span class="desc">Outlook Express</span>
              </div>
            </div>
            <ul>
              <li class="tab">
                <img src="" alt="" />
                <span>MSN Explorer</span>
              </li>
              <li class="tab">
                <img src="" alt="" />
                <span>MSN Explorer</span>
              </li>
              <li class="tab">
                <img src="" alt="" />
                <span>MSN Explorer</span>
              </li>
              <li class="tab">
                <img src="" alt="" />
                <span>MSN Explorer</span>
              </li>
              <li class="tab">
                <img src="" alt="" />
                <span>MSN Explorer</span>
              </li>
              <li class="tab">
                <img src="" alt="" />
                <span>MSN Explorer</span>
              </li>
            </ul>
          </div>
          <div class="content-right">
            <ul>
              <li class="tab">
                <img src="" alt="" />
                <span class="title">My Documents</span>
              </li>
              <li class="tab">
                <img src="" alt="" />
                <span class="title">My Recent Documents</span>
              </li>
              <li class="tab">
                <img src="" alt="" />
                <span class="title">My Pictures</span>
              </li>
              <li class="tab">
                <img src="" alt="" />
                <span class="title">My Music</span>
              </li>
              <li class="tab">
                <img src="" alt="" />
                <span class="title">My Computer</span>
              </li>
            </ul>
            <div class="tab">
              <img src="" alt="" />
              <span class="desc">Control Panel</span>
            </div>
            <div class="tab">
              <img src="" alt="" />
              <span class="desc">Control Panel</span>
            </div>
            <div class="tab">
              <img src="" alt="" />
              <span class="desc">Control Panel</span>
            </div>
            <div class="tab">
              <img src="" alt="" />
              <span class="desc">Control Panel</span>
            </div>
            <div class="tab">
              <img src="" alt="" />
              <span class="desc">Control Panel</span>
            </div>
          </div>
        </div>
        <div class="system-buttons"></div>
      </div>
    </div>
    <div class="quick-start"></div>
    <div class="tasks"></div>
    <div class="notif">
      <span class="time">{{ time }}</span>
      <span class="date">{{ date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Taskbar',
  props: {
    menuShow: Boolean,
  },
  data() {
    return {
      time: null,
      date: null,
      interval: null,
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  mounted() {
    //每秒更新一次时间
    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat('zh-CN', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }).format()
      this.date = Intl.DateTimeFormat('zh-CN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
        .format()
        .replace('星', '\n星')
    }, 1000)
  },
  methods: {
    handleRightClick(e) {
      e.preventDefault()
    },
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
  user-select: none;
}

.start-btn {
  display: flex;
  font-family: Franklin Gothic;
  font-size: 19px;
  font-style: italic;
  color: #fff;
  text-shadow: 1px 1px 3px rgb(69 76 16), 0px 0px 3px rgb(69 76 16);
  padding: 4.5px 18px 4.5px 8px;
  border-radius: 0 8px 8px 0 / 0 18px 18px 0;
  box-shadow: inset -1px 0 0px #333;
  background: linear-gradient(
    to bottom,
    #379237 0%,
    #6fb26f 9%,
    #379237 18%,
    #379237 92%,
    #333 100%
  );
  cursor: default;
  filter: brightness(1.2);
}

.start-btn:hover,
.start.menu-open .start-btn {
  filter: brightness(0.9);
}

.start-menu {
  position: absolute;
  width: 270px;
  height: 450px;
  background-color: #1398ed;
  bottom: 30px;
  left: 0;
  display: flex;
  flex-direction: column;
  border-radius: 5px 5px 0 0;
  background: linear-gradient(
    0deg,
    #0e5ecc 0%,
    #428ae3 15%,
    #448fea 85%,
    #1162cc 98%,
    #0e5ecc 100%
  );
  font-size: 13px;
  box-shadow: inset 0 2px 1px #c7def8;
}

.start-menu .header {
  color: #fff;
  min-height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  text-shadow: 1px 2px #333;
}

.menu-content {
  display: flex;
  background: #fff;
  margin: 0 2px;
  border-top: 3px solid;
  border-image: linear-gradient(90deg, #fff 5%, #f88a24 50%, #fff 95%) 100 10;
}

.content-left {
  border-right: 2px solid #95bdee;
}

.content-right {
  background: #d3e5fa;
  color: #0a246a;
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

.notif .date {
  font-size: 12px;
  position: absolute;
  bottom: 32px;
  right: 1px;
  background-color: #fff;
  color: #000;
  white-space: pre;
  visibility: hidden;
}

.notif .time:hover + .date {
  visibility: visible;
}
</style>
