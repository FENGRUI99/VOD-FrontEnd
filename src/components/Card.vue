<template>
      <el-card :body-style="{ padding: '0px'}" class="my-card" @mouseenter="zoomIn" @mouseleave="zoomOut" shadow="hover" style="width: 100%;height: 100%;border-radius: 8px" :style="{boxShadow: '--el-box-shadow-dark'}">
        <img
            :src="'/src/assets/' + title.split('.')[0] + '.png'"
            class="image"
        />
        <div style="padding: 1px; font-size: small" >
          <span>{{title}}</span>
        </div>
      </el-card>

</template>

<script>
export default {
  name: 'Card',
  props:{
    title: String
  },
  methods: {
    zoomIn(event) {
      event.currentTarget.style.transform = "scale(1.2)"; // Zoom in by 20%
    },
    zoomOut(event) {
      event.currentTarget.style.transform = "scale(1)"; // Reset to original size
    },
  },
}
</script>
<style>
.my-card {
  transition: transform 0.3s ease; /* Add smooth transition when zooming in/out */
}
.image {
  width: 100%;
  /*height: 10%;*/
  display: flex;
}
</style>