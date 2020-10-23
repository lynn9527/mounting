<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data(){
            return{
                transitionName:''
            }
        },
        watch: {//使用watch 监听$router的变化
            $route(to, from) {
                //如果to的索引值为0，不添加任何动画；如果to索引大于from索引,判断为前进状态,反之则为后退状态
                if(to.meta.index > 0){
                    if( to.meta.index < from.meta.index){
                        this.transitionName = 'slide-right';
                    }else{
                        this.transitionName = 'slide-left';
                    }
                }else if(to.meta.index == 0){
                    this.transitionName='';
                }else if(from.meta.index > 0){
                    this.transitionName = 'slide-right';
                }
            }
        },
        mounted(){
          // window.location.href = '/';
        }

    }
</script>

<style>
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .header{padding-top: .44rem !important;}
    .bottomPx{margin-bottom: .34rem !important;}
    .bottom{padding-bottom: .34rem !important;padding-top: 10px !important;}
    .mui-preview-header,.mui-preview-footer{position: absolute;width: 100%;left: 0;z-index: 10;margin-top: .24rem}
    .goTop{bottom: 1.4rem !important; position: fixed}
  }
  /*bottom*/
  .bottom{
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #b2b2b2;
    padding: 0 .15rem;
    box-sizing: border-box;
    color: #1c1c1c;
    font-size: .13rem;
    z-index: 10;
  }
  .bottom-ul{
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0;
  }
  .bottom-ul>li{
    height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .bottom-ul img{
    display: inline-block;
    height: .22rem;
  }
  .router-link-active{
    color: #ff404c;
    background-color: #fff;
  }
  .bottom-ul>li>i{
    font-size: 1.5rem;
  }
  #app{
    width: 100%;
    height: 100%;
    /*overflow-x: hidden;*/
    /*overflow-y: scroll;*/
    /*display: flex;*/
    /*flex-direction: column;*/
  }
  /*.bottom-ul span{*/
  /*color: #1c1c1c;*/
  /*}*/
  .on{
    color: #ff404c;
  }

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all .4s;
    position: absolute;
    width:100%;
    left:0;
  }
  .slide-right-enter {
    transform: translateX(-100%);
  }
  .slide-right-leave-active {
    transform: translateX(100%);
  }
  .slide-left-enter {
    transform: translateX(100%);
  }
  .slide-left-leave-active {
    transform: translateX(-100%);
  }
</style>
