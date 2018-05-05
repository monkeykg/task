<template>
  <div class='takeTask'>
    <!-- navbar 导航栏 -->
    <van-nav-bar title="接任务 "  left-arrow @click-left='onClickLeft'></van-nav-bar>
  </div>
</template>
<script>
export default {
  name:'takeTask',
  methods:{
      onClickLeft(){
            Toast('返回');
      }
  }
}
</script>
<style lang="stylus" scoped>

</style>


