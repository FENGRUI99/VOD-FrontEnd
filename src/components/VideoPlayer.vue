<script setup>
</script>

<template>
  <div>
    <vue3VideoPlay
        v-bind="options"
        :poster= poster
        :style="{ width: w, height: h}"
    />
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "VideoPlayer",
  props:{
    w: String,
    h: String,
    fileName: String,
  },
  data () {
    return {
      options: '',
      poster: '',
    }
  },
  watch: {
    fileName(newValue, oldValue) {
      this.initOptions()
    },
  },
  mounted() {
    this.initOptions()
  },
  methods: {
    initOptions(){
      this.poster = '../assets/' + this.fileName.split('.')[0] + '.png'
      this.options = {
        width: "640px", //播放器高度
        height: "360px", //播放器高度
        color: "#409eff", //主题色
        title: "", //视频名称
        src: 'http://localhost:18343/peer/view/content/' + this.fileName, //视频源
        muted: false, //静音
        webFullScreen: false,
        speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
        autoPlay: true, //自动播放
        loop: false, //循环播放
        mirror: false, //镜像画面
        ligthOff: false, //关灯模式
        volume: 0.3, //默认音量大小
        control: true, //是否显示控制
        controlBtns: [
          "audioTrack",
          "quality",
          "speedRate",
          "volume",
          "setting",
          "pip",
          "pageFullScreen",
          "fullScreen",
        ], //显示所有按钮,
      }
    }
  }

}
</script>

<style scoped></style>