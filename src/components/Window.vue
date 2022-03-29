<template>
  <div class="wrapper">
    <div class="header">
      <div draggable="true" class="topBar">
        <div class="label">
          <img :src="require('../assets/folder-empty.png')" alt="" />
          <span>Window</span>
        </div>
        <div class="control">
          <button class="minimize"></button>
          <button class="maximize"></button>
          <button class="close"></button>
        </div>
      </div>
      <div class="menuBar">
        <div class="menuTop">
          <ul>
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Favorites</li>
            <li>Tools</li>
            <li>Help</li>
          </ul>
        </div>
        <div class="menuBottom">
          <div class="arrows">
            <div class="arrowBack">
              <img src="" alt="" />
              <span>Back</span>
            </div>
            <div class="arrowNext">
              <img src="" alt="" />
            </div>
          </div>
          <div class="search"></div>
        </div>
        <div class="addressBar">
          <span>Address</span>
          <input type="text" />
          <button>
            <img src="" alt="" />
            Go
          </button>
          <div>go</div>
        </div>
      </div>
    </div>
    <div class="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores quasi
      non quam architecto dolore eum laboriosam soluta quisquam impedit quo
      voluptates, exercitationem, placeat nam temporibus repudiandae nisi quos
      ab perferendis hic fugit cumque? Doloremque sapiente neque aliquam eius
      modi architecto harum rem, ipsam commodi? Facilis in voluptas
      reprehenderit numquam.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Window',
  props: {
    top: Number,
    left: Number,
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  width: 400px;
  height: 500px;
  background-color: #fff;
  border-radius: 5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;
  position: absolute;
}
.wrapper .header .topBar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 5px;
  background: #0069ff;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(5%, #0063b9),
    color-stop(5.1%, transparent),
    color-stop(85%, transparent),
    to(#49b2fb)
  );
  background-image: linear-gradient(
    to top,
    #0063b9 5%,
    transparent 5.1%,
    transparent 85%,
    #49b2fb 100%
  );
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.wrapper .header .topBar .label {
  height: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.wrapper .header .topBar .label img {
  width: 20px;
  margin-right: 5px;
}
.wrapper .header .topBar .label span {
  font-size: 15px;
  font-weight: bold;
  color: #fff;
}
.wrapper .header .topBar .control button {
  position: relative;
  border: 1px solid #fff;
  border-radius: 2px;
  width: 26px;
  height: 26px;
  margin-left: 4px;
  background: transparent;
  background: linear-gradient(
    135deg,
    #fff 0%,
    transparent 30%,
    transparent 100%
  );
  cursor: pointer;
}
.wrapper .header .topBar .control button:hover {
  background: linear-gradient(
    135deg,
    #fff 0%,
    transparent 60%,
    transparent 100%
  );
}
.wrapper .header .topBar .control button.minimize::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 3px;
  bottom: 5px;
  left: 5px;
  background-color: #fff;
}
.wrapper .header .topBar .control button.maximize::before {
  content: '';
  position: absolute;
  width: 12px;
  height: 9px;
  border: 1px solid #fff;
  border-top: 4px solid #fff;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.wrapper .header .topBar .control button.close {
  background: linear-gradient(135deg, #fff 0%, #d5471a 30%, #d5471a 100%);
}
.wrapper .header .topBar .control button.close:hover {
  background: linear-gradient(135deg, #fff 0%, #d5471a 60%, #d5471a 100%);
}
.wrapper .header .topBar .control button.close::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 3px;
  top: 50%;
  left: 50%;
  background-color: #fff;
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);
  transform: translate(-50%, -50%) rotate(-45deg);
}
.wrapper .header .topBar .control button.close::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 3px;
  top: 50%;
  left: 50%;
  background-color: #fff;
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
}
.wrapper .header .menuBar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: #efeedc;
}
.wrapper .header .menuBar .menuTop {
  -webkit-box-shadow: inset 0 1.4px rgba(255, 255, 255, 0.8),
    inset 0 -1.6px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1.4px rgba(255, 255, 255, 0.8),
    inset 0 -1.6px rgba(0, 0, 0, 0.2);
}
.wrapper .header .menuBar .menuTop ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0;
  padding: 0;
}
.wrapper .header .menuBar .menuTop ul li {
  padding: 6px 10px;
}
.wrapper .header .menuBar .menuTop ul li:hover {
  -webkit-box-shadow: inset 1.4px 1.4px rgba(255, 255, 255, 0.8),
    inset -1.6px -1.6px rgba(0, 0, 0, 0.7);
  box-shadow: inset 1.4px 1.4px rgba(255, 255, 255, 0.8),
    inset -1.6px -1.6px rgba(0, 0, 0, 0.7);
}
.wrapper .header .menuBar .menuBottom {
  -webkit-box-shadow: inset 0 1.4px rgba(255, 255, 255, 0.8),
    inset 0 -1.6px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1.4px rgba(255, 255, 255, 0.8),
    inset 0 -1.6px rgba(0, 0, 0, 0.2);
  height: 50px;
}

.content {
  max-height: 340px;
  font-size: 30px;
  overflow: auto;
}
</style>
