<template>
  <div class="redpackage">
      <div class="redpackage-wrapper">
        <div class="hongbao">
                    <div class="topcontent">
                        <div class="avatar">
                            <img src="http://placehold.it/80x80" alt="" width="80" height="80">
                            <span id="close">+</span>
                        </div>
                        <h2>老罗</h2>
                        <span class="text">给你发了一个红包</span>
                        <div class="description">恭喜发财 大吉大利</div>
                    </div>
                    <div class="chai rotate" id="chai">
                        <span>拆红包</span>
                    </div>
                </div>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style  scoped>
.redpackage{
    height: 100%;
    width: 100%;
    position: absolute; 
    top: 0;
    left: 0;
    z-index: 1000;
    overflow: hidden;
    background: rgba(0,0,0,0.4);
   /* display none ; */
}
.redpackage-wrapper{
      height:400px;
      width:250px;
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      /* background:#eee; */
      text-align: center;
}
.hongbao{
    height:100%;
    background: #A5423A;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
    margin: 0 auto;
}
.topcontent{
    height: 280px;
    border: 1px solid #BD503A;
    background-color: #BD503A;
    border-radius: 10px 10px 50% 50% / 10px 10px 15% 15%;
    box-shadow: 0px 4px 0px -1px rgba(0,0,0,0.2);
}
.avatar{
    position: relative;
}
.avatar span{
    position: absolute;
    top: 10px;
    right: 15px;
    -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
            transform: rotate(45deg);
    font-size: 2em;
    font-weight: bolder;
}
#close{
    color: rgba(0,0,0,0.5);
}
.avatar img{
    border: 1px solid #BD503A;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 10%;
}
.topcontent h2{
    margin: 15px 0;
}
.text{
    color:white;
}
.description{
    margin: 15px 0;
    font-size: 16px;
    font-weight: 600;
}
#chai{
    width: 100px;
    height: 100px;
    border: 1px solid #FFA73A;
    background-color: #FFA73A;
    border-radius: 50%;
    color: #fff;
    font-size: 20px;
    display: inline-block;
    margin-top: -50px;
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.2);
}
#chai span{
    margin-top: 35px;
    display: inline-block;
}
.rotate{
    -webkit-animation: anim .6s infinite alternate;
        -ms-animation: anim .6s infinite alternate;
            animation: anim .6s infinite alternate;
}
@-webkit-keyframes anim {
    from { -webkit-transform: rotateY(180deg); }
    to { -webkit-transform: rotateY(360deg); }
}
@-ms-keyframes anim {
    from { -ms-transform: rotateY(180deg); }
    to { -ms-transform: rotateY(360deg); }
}
@keyframes anim {
    from { transform: rotateY(180deg); }
    to { transform: rotateY(360deg); }
}  
</style>

