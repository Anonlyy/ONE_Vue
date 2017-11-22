<template>
  <div class="footer-bar">
      <span class="btn-backtop" @click.stop="backTop">
         <Icon type="arrow-up-c" size="20"></Icon>
      </span>
  </div>
</template>

<script>
    export default {
        name: 'backTopBar',
        data() {
            return {}
        },
      methods:{
        //回到顶部
        backTop() {
          let timer = null;
          let scrollTop ;
          timer = setInterval(()=>{
            scrollTop = document.getElementById('app-list').scrollTop;
            document.getElementById('app-list').scrollTop -=30;
            if(scrollTop<=0){
              clearInterval(timer);
            }
          },3)
        },
      }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .footer-bar {
    position: fixed;
    right: 1.5rem;
    bottom: 2rem;
    z-index: 1000;
    >.btn-backtop {
      display: inline-block;
      background-color: white;
      width: 3.5rem;
      text-align: center;
      line-height: 3.5rem;
      font-weight: bold;
      font-size: 1.3rem;
      height: 3.5rem;
      border-radius: 50%;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, .15);
      >i{
        color: #318BF0;
        vertical-align: middle;
      }
    }
  }
</style>
