<template>
  <div class="gettask" >
      <!-- nav 导航 -->
      <van-nav-bar title="接任务" left-arrow @click-left="onClickLeft"></van-nav-bar>
      <!-- tab 导航区域 -->
      <van-tabs type='card'>
        <van-tab>
          <div slot="title">
            我的任务
          </div>
          <div class='task-list'>
            <div class="task-item">
              <div class="task-item-bulletin"></div>
              <div class="task-item-content">
                <div class="task-item-title">
                  <p class='share'>分享铂金公馆宣传视频到朋友圈</p>
                  <p class="allbonus ">总奖金：1万元</p>
                  <p class="now">当兵前最高获20元</p>
                </div>
                <div class="task-item-btn">
                  <router-link to="/redpackage">领红包</router-link>
                </div>
              </div>
            </div>
            <div class="task-item">
              <div class="task-item-bulletin"></div>
              <div class="task-item-content">
                <div class="task-item-title">
                  <p class='share'>分享铂金公馆宣传视频到朋友圈</p>
                  <p class="allbonus ">总奖金：1万元</p>
                  <p class="now">当兵前最高获20元</p>
                </div>
                <div class="task-item-btn">
                  <van-button size="small">去完成</van-button>
                </div>
              </div>
            </div>
          </div>
          <div class="task-old">往期任务</div>
        </van-tab>
        <van-tab>
          <div slot="title">
            任务中心
          </div>
          <div class='task-center'> 任务中心</div>
        </van-tab>
      </van-tabs>
      <redpackage></redpackage>
  </div>
</template>
<script>
import redpackage from '@/components/page/redpackage.vue'
export default {
  name:'home',
  methods:{
    onClickLeft(){

    }
  },
  components:{
    redpackage
  }
}
</script>
<style lang="stylus">

  .task-list
    padding 0px 0 0 10px
    .task-item
      display flex
      padding-top 20px
      .task-item-bulletin
        flex 0 0 40px
        width 40px
        height 50px 
        border 1px solid #aeaeae  
        border-radius 5px
      .task-item-content
        margin-left 10px
        flex 1
        display flex
        height 70px
        border-bottom 1px solid #aeaeae 
        .task-item-title
          flex 1
          font-size 14px
          .share
            font-weight 700
            padding-bottom 5px
          .allbonus
            color red 
            padding-bottom 5px
          .now
            font-size 12px
            font-weight 500
            color #aeaeae
        .task-item-btn
          flex 0 0 70px
          line-height 70px
          width 70px
          a 
            border 1px solid #aeaeae
            padding 5px 
            border-radius 2px
            font-size 12px

</style>



