<template>
  <div class='takeTask'>
    <!-- navbar 导航栏 -->
    <van-nav-bar title="接任务 "  left-arrow @click-left='onClickLeft'></van-nav-bar>
    <!-- tabs页签 -->
    <van-tabs type='card' >
      <van-tab>
        <div slot="title">我的任务</div>
        <div class='tasklist'>
          <div class='tasklist-bulletin'></div>
          <div class='tasklist-topics'>
            <span class="tasklist-topics-share">分享铂金公馆宣传视频到朋友圈</span>
            <span class="tasklist-topics-allbonus">总奖金：1万元</span>
            <span class='tasklist-topics-bonus'>当前最高获30元</span>
          </div>
          <div class='tasklist-btn'><router-link to="/gofinish/redpacket">去完成</router-link></div>
        </div>
        <div class="oldtask">
          <div class="oldtask-title">往期任务</div>
          <div class="oldtask-content"></div>
        </div>
      </van-tab>
      <van-tab>
        <div slot="title">任务中心</div>
        任务中心
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name:'takeTask',
  methods:{
      onClickLeft(){
           alert('返回');
      }
  }
}
</script>
<style lang="stylus" scoped>
  .tasklist
    display flex
    padding-left 10px
    padding-top 20px
    .tasklist-bulletin
      flex 0 0 50px
      width 50px
      height 60px
      border 1px solid #aeaeae
      border-radius 5px
    .tasklist-topics
      flex 1
      padding-left 5px
      span.tasklist-topics-share
        display block
        font-size 14px
        font-weight 700
        height 20px
        line-height 20px
      span.tasklist-topics-allbonus
        display block
        font-size 14px
        color red
        font-weight 700
        height 20px
        line-height 20px
      span.tasklist-topics-bonus
        display block
        font-size 14px
        height 20px
        line-height 20px
    .tasklist-btn
      flex 0 0 70px
      width 70px
      line-height 60px
      a
        padding 5px
        border 1px solid #aeaeae
        font-size 12px
        border-radius 5px
        
  .oldtask
    .oldtask-title
      font-size 14px
      height 30px
      line-height 30px
      padding-left 10px
      

</style>


