<template>
  <el-row>
      <el-card :body-style="{ padding: '0px' }" shadow="always">
        <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
        />
        <div style="padding: 14px">
          <span>{{title}}</span>
        </div>
      </el-card>
  </el-row>
</template>

<script setup>
</script>
<script>
export default {
  name: 'Card',
  props:{
    title: String
  }
}
</script>
<style>


.image {
  width: 100%;
  display: block;
}
</style>